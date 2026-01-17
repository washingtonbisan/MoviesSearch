import { use } from "react";
import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorite");

    if (storedFavs) setFavorite(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addToFavorite = (movie) => {
    setFavorite((prev) => [...prev, movie]);
  };

  const removeFromFavorite = (movieId) => {
    setFavorite((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorite.some((movie) => movieId === movieId);
  };

  const value = {
    favorite,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
