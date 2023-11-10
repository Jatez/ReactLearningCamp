import { createContext, useEffect, useState } from "react";

export const AnimeContext = createContext();

export const AnimeContextProvider = (props) => {
  const [animes, setAnime] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/anime?limit=20");
      const data = await response.json();
      setAnime(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AnimeContext.Provider
      value={{
        animes,
        setAnime,
      }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};