import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AnimeContextProvider } from "./contexts/AnimeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimeContextProvider>
      <App />
    </AnimeContextProvider>
  </React.StrictMode>
);
