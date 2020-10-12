import React, { useState, createContext } from "react";
import Movie from "./Movie";

export const MovieContext = createContext();

const MovieProvider = () => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};

export default MovieProvider;
