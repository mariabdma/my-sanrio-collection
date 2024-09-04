import React, { useState, useEffect } from "react";
import { Title, TitleDiv, LogoIcon, CardsDiv, Header, AddIcon } from "./styles";
import CatalogCard from "../../components/CatalogCard";

const CatalogPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header>
        <TitleDiv>
          <LogoIcon />
          <Title>My Sanrio Collection</Title>
        </TitleDiv>
        <AddIcon />
      </Header>
      <CardsDiv>
        {characters.length > 0 &&
          characters.map((character) => (
            <CatalogCard
              key={character.id}
              avatarSrc={character.image}
              name={character.name}
              description={character.description}
              quote={character.quote}
            />
          ))}
      </CardsDiv>
    </div>
  );
};

export default CatalogPage;
