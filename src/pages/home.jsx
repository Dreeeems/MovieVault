import React, { useState, useEffect } from "react";
import { getUpcomming, getPopular, getTopRate } from "../util/fetchFromApi";
import NavBar from "../components/navbar";
import SearchBar from "../components/searbar";
import Feed from "../components/fed";

const Home = () => {
  const [popular, setPopular] = useState(null);
  const [topRate, setTopRate] = useState(null);
  const [upcomming, setUpcomming] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let data = await getPopular();
        setPopular(data);
        data = await getTopRate();
        setTopRate(data);
        data = await getUpcomming();
        setUpcomming(data);
        console.log(popular);
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
        {popular &&
        popular.results &&
        popular.results.length > 0 &&
        topRate &&
        topRate.results &&
        topRate.results.length > 0 &&
        upcomming &&
        upcomming.results &&
        upcomming.results.length > 0 ? (
          <div>
            <Feed
              populars={popular.results}
              topRate={topRate.results}
              upcomming={upcomming.results}
            />
          </div>
        ) : (
          <div>No Movies Available</div>
        )}
      </div>
    </div>
  );
};

export default Home;
