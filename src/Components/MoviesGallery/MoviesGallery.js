import { Link, useLocation } from "react-router-dom";
import styles from "./MoviesGallery.module.css";
const IMG = "https://image.tmdb.org/t/p/w500";
const MoviesGallery = ({ movies }) => {
 
    const location = useLocation();
  return (
    <ul className={styles.listOfMovies}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.itemMovie}>
              <Link to={{
                  pathname: `movies/${movie.id}`,
                  state:{from:location},
              }} className={styles.link}>
            <img
              src={IMG + movie.poster_path}
              alt={movie.title}
              className={styles.picture}
            />{" "}
            <p className={styles.nameOfMovie}>{movie.title}</p>
          </Link>

         
        </li>
      ))}
    </ul>
  );
};
export default MoviesGallery;
