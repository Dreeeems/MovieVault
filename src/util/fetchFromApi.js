import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getPopular = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("error : ", error);
    throw error;
  }
};

export const getMovie = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("error : ", error);
    throw error;
  }
};
