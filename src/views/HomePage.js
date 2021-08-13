import { useEffect, useState } from "react";
import MoviesGallery from "../Components/MoviesGallery/MoviesGallery";
import styles from "./ViewStyle.module.css"
import * as API from "../api";
export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    API.fetchTrendingMovies().then(movies => setMovies(movies.results));
  }, []);
  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      {movies && <MoviesGallery movies={movies} />}
    </>
  );
}
