import { useState } from "react";
import "./css/App.css";
import Favorite from "./pages/Favorite";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieCard from "./components/MovieCard";
import Favorites from "./pages/Favorite";
import { MovieProvider } from "./context/MovieContext";
import NavBar from "./components/Navbar";

function App() {
  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
