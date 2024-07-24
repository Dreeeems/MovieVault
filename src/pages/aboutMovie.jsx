import React from "react";
import NavBar from "../components/navbar";
import SearchBar from "../components/searbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovie } from "../util/fetchFromApi";

const AboutMovie = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovie(params.id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie found</div>;

  return (
    <div>
      <NavBar />
      <SearchBar />
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default AboutMovie;
