import axios from "axios";

const API_URL = "http://localhost:5000/characters";

export const fetchCharacters = async (page = 1, limit = 25) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const addCharacter = async (newCharacter) => {
  try {
    const response = await axios.post(API_URL, {
      ...newCharacter,
      image: newCharacter.image || "default_image_url_here",
    });
    return response.data;
  } catch (error) {
    console.error("Error adding character:", error);
    throw error;
  }
};

export const deleteCharacter = async (characterId) => {
  try {
    await axios.delete(`${API_URL}/${characterId}`);
  } catch (error) {
    console.error("Error deleting character:", error);
    throw error;
  }
};

export const updateCharacter = async (characterId, updatedCharacter) => {
  try {
    const response = await axios.put(
      `${API_URL}/${characterId}`,
      updatedCharacter
    );
    return response.data;
  } catch (error) {
    console.error("Error updating character:", error);
    throw error;
  }
};
