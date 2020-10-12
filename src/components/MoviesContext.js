import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "movie1", price: "$5", id: 1 },
    { name: "movie2", price: "$8", id: 2 },
    { name: "movie3", price: "$12", id: 3 },
    { name: "movie4", price: "$8", id: 4 },
    { name: "movie5", price: "$3", id: 5 },
  ]);
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
