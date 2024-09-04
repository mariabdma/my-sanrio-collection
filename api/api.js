import axios from "axios";

const API_URL = "http://localhost:3000/characters"; // Update this URL if needed

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
