import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getPopular = async () => {
  console.log(API_KEY);

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    );
    const data = response.data;
    console.log(data); // Pour déboguer
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    throw error;
  }
};
