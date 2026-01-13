import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => ({});

  let movies = [
    { id: 1, title: "Matrix", releaseDate: 1998 },
    { id: 2, title: "Big Black Box", releaseDate: 1999 },
    { id: 3, title: "Yori Yori", releaseDate: 2012 },
    { id: 4, title: "Padington", releaseDate: 2016 },
  ];
  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="submit-form">
        <input
          type="text"
          placeholder="Search For movies.."
          className="Search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>
      <div className="Movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
