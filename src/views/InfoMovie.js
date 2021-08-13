import { useEffect, useState, lazy, Suspense } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
// import Cast from "./Cast";
// import Reviews from "./Reviews";
import styles from "./ViewStyle.module.css";
import { fetchInfoMovie } from "../api";
const IMG = "https://image.tmdb.org/t/p/w500";

const Cast = lazy(() => import("./Cast" /*webpackChunkName: "Cast"*/));
const Reviews = lazy(() => import("./Reviews" /*webpackChunkName: "Reviews"*/));

export default function InfoMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  console.log(location);
  const history = useHistory();

  const onGoBack = () => {   
    // history.push(location?.state?.from ?? "/");
     history.push(location?.state?.from?.state?.from ?? location?.state?.from ??"/");
  };

  useEffect(() => {
    fetchInfoMovie(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  return (
    <div className={styles.infoSection}>
      {movie && (
        <>
          <button type="button" className={styles.button} onClick={onGoBack}>
            {" "}
            ← Back
          </button>
          <div className={styles.information}>
            <img
              src={IMG + movie.poster_path}
              alt={movie.title}
              width={300}
              className={styles.infoPic}
            />
            <div className={styles.infoText}>
              <h2 className={styles.title}>{movie.title}</h2>
              <p className={styles.title}>
                Vote average: {movie.vote_average}{" "}
              </p>
              <p className={styles.title}>Overview: {movie.overview}</p>
              <h3 className={styles.title}>
                Genres: {movie.genres.map((genre) => genre.name)}
              </h3>
            </div>
          </div>
          <hr />

          <h3 className={styles.title}>Additional information</h3>
          <nav>
            {/* <NavLink to={`${url}/cast`} className={styles.link}>
              Cast
            </NavLink> */}
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location },
              }}
              className={styles.link}
            >
              Cast{" "}
            </NavLink>

            <NavLink to={`${url}/reviews`} className={styles.link}>
              Reviews
            </NavLink>
          </nav>
        </>
      )}

      <hr />
      <Suspense fallback={<p>loading..</p>}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
