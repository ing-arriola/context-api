import React, { useState, useContext } from "react";
import { MovieContext } from "./MoviesContext";

const AddMovies = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevItems) => [...prevItems, { name: name, price: price }]);
  };

  return (
    <form onSubmit={addMovie}>
      <label>NAME</label>
      <input type="text" name="name" value={name} onChange={updateName}></input>
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default AddMovies;
