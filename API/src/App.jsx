import { useState, useEffect } from "react";
import AnimeList from "./components/AnimeList";
import "../App.css";

function App() {
  return (
    <div className="container">
      <h1>Animes</h1>
      <AnimeList />
    </div>
  );
}

export default App;
