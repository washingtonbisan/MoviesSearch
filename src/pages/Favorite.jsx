import "../css/Favorite.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorite } = useMovieContext();
  if (favorite) {
    return;

    <div className="favorite">
      <h2>Your Favorite</h2>
      <div className="movies-grid">
        {favorite.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>;
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies yet</h2>

      <p>Start Adding movies to your favorites and they will appear here</p>
    </div>
  );
}
export default Favorite;
