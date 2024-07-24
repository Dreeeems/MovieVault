import React, { useState, useEffect } from "react";
import { getPopular } from "../util/fetchFromApi";
import NavBar from "../components/navbar";
import SearchBar from "../components/searbar";
import Feed from "../components/fed";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopular();
        setMovies(data);
        console.log(movies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div>
        <NavBar />
        <SearchBar />
      </div>
      <div>
        {movies && movies.results && movies.results.length > 0 ? (
          <div>
            <Feed videos={movies.results} />
          </div>
        ) : (
          <div>No Movies Available</div>
        )}
      </div>
    </div>
  );
};

export default Home;
