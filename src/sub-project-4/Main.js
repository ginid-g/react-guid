import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./Main.css";

function Main() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMovieHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    setMovies(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? <p>Loading ..... </p> : <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default Main;
