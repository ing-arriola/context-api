import React from "react";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./components/MoviesContext";
import Nav from "./components/Nav";
import AddMovies from "./components/AddMovies";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
