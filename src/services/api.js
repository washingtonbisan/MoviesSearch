const API_KEY = "4e97a961294da580be49cfc4293acb19";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`API error ${response.status}`);
  const data = await response.json();
  return data.results || [];
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`API error ${response.status}`);
  const data = await response.json();
  return data.results || [];
};
