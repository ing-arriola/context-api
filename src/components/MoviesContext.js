import React, { useState, Children } from "react";

const MoviesContext = (props) => {
  const [movies, setMovies] = useState([
    { name: "movie1", price: "$5", id: 1 },
    { name: "movie2", price: "$8", id: 2 },
    { name: "movie3", price: "$12", id: 3 },
  ]);
  return (
    <div>
      <MovieContext.Provider>{props.children}</MovieContext.Provider>
    </div>
  );
};

export default MoviesContext;
