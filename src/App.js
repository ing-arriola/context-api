import React from "react";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
