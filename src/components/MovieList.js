import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    { name: "movie1", price: "$5", id: 1 },
    { name: "movie2", price: "$8", id: 2 },
    { name: "movie3", price: "$12", id: 3 },
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} />
      ))}
    </div>
  );
};

export default MovieList;
