import React from "react";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./components/MoviesContext";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
