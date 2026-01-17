import MovieCard from "../components/MovieCard";
import { useState, useEffect, useRef } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const mountedRef = useRef(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mountedRef.current = true;

    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        if (mountedRef.current) setMovies(popularMovies || []);
      } catch (err) {
        console.error(err);
        if (mountedRef.current) setError("Failed to load movies.");
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    };

    loadPopularMovies();

    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchMovies(searchQuery);
      if (mountedRef.current) setMovies(searchResults || []);
    } catch (err) {
      console.error(err);
      if (mountedRef.current) setError("Failed to search movies.");
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="submit-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="Search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Please wait..." : "Search"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : movies.length === 0 ? (
        <div className="no-results">No movies found.</div>
      ) : (
        <div className="Movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
