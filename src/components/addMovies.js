import React, { useState } from "react";

const addMovies = () => {
  const [name, setName] = useState("");
  const [proce, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
  };

  return (
    <form>
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

export default addMovies;
