import { useState, useEffect, useContext } from "react";
import { AnimeContext } from "../contexts/AnimeContext";
import "../App.css";

function AnimeList() {
  const { animes } = useContext(AnimeContext);

  return (
      <div className="list">
        {animes.map((anime) => (
          <div key={anime.title} className="card">
            <h2>{anime.title}</h2>
            <img src={anime.images.webp.image_url} alt="" />
            <p>Rating: {anime.rating}</p>
            <p>Episodes: {anime.episodes}</p>
            <p>Year: {anime.year}</p>
          </div>
        ))}
      </div>
  );
}

export default AnimeList;
