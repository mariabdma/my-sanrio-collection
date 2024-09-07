import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Title,
  TitleDiv,
  LogoIcon,
  CardsDiv,
  Header,
  AddIcon,
  SuccessMessage,
  ErrorMessage,
} from "./styles";
import { CatalogCard, InputCharacterModal } from "../../components/";
import {
  fetchCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter,
} from "../../api/api";

const CatalogPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10; // Number of items per page

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters(page, limit);
        if (data.length < limit) {
          setHasMore(false);
        }
        // Ensure no duplicate characters are added
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...data.filter(
            (character) =>
              !prevCharacters.find((prev) => prev.id === character.id)
          ),
        ]);
      } catch (error) {
        setErrorMessage("Error fetching characters.");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    };

    getCharacters();
  }, [page]);

  const handleOpenModal = (character = null) => {
    setEditingCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingCharacter(null);
    setIsModalOpen(false);
  };

  const handleAddCharacter = async (newCharacter) => {
    try {
      const addedCharacter = await addCharacter(newCharacter);
      setCharacters((prevCharacters) => [...prevCharacters, addedCharacter]);
      setSuccessMessage("Character successfully added!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage("Error adding character.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleEditCharacter = async (updatedCharacter) => {
    try {
      const updated = await updateCharacter(
        updatedCharacter.id,
        updatedCharacter
      );
      setCharacters((prevCharacters) =>
        prevCharacters.map((character) =>
          character.id === updated.id ? updated : character
        )
      );
      setSuccessMessage("Character successfully updated!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setEditingCharacter(null);
    } catch (error) {
      setErrorMessage("Error updating character.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleDeleteCharacter = async (characterId) => {
    try {
      await deleteCharacter(characterId);
      setCharacters((prevCharacters) =>
        prevCharacters.filter((character) => character.id !== characterId)
      );
      setSuccessMessage("Character successfully deleted!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage("Error deleting character.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div>
      <Header>
        <TitleDiv>
          <LogoIcon />
          <Title>My Sanrio Collection</Title>
        </TitleDiv>
        <AddIcon onClick={() => handleOpenModal()} />
      </Header>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <InfiniteScroll
        dataLength={characters.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
      >
        <CardsDiv>
          {characters.length > 0 &&
            characters.map((character) => (
              <CatalogCard
                key={character.id}
                avatarSrc={character.image}
                name={character.name}
                description={character.description}
                quote={character.quote}
                onEdit={() => handleOpenModal(character)}
                onDelete={() => handleDeleteCharacter(character.id)}
              />
            ))}
        </CardsDiv>
      </InfiniteScroll>

      <InputCharacterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddCharacter={handleAddCharacter}
        onEditCharacter={handleEditCharacter}
        editingCharacter={editingCharacter}
      />
    </div>
  );
};

export default CatalogPage;
