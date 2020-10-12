import React, { useContext } from "react";
import { MovieContext } from "./MoviesContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <p>Movies:{movies.length} </p>
    </div>
  );
};

export default Nav;
