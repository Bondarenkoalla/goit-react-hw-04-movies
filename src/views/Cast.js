import { useEffect, useState } from "react";
import { fetchCastMovie } from "../api";
import styles from "./ViewStyle.module.css"
// import { useParams } from "react-router";
const IMG = "https://image.tmdb.org/t/p/w500";
export default function Cast({ movieId }) {
//   const { movieId } = useParams();
  const [cast, setCast] = useState([]);
    useEffect(() => {
       fetchCastMovie(movieId).then(request => setCast(request.cast));
    }, [movieId]);
  return (
    <ul className={styles.castList}>
      {cast.map(item => (
        <li key={item.id} className={styles.castItem}>
          <img src={IMG + item.profile_path} alt={item.name} className={styles.castPic} />
          <p className={styles.title}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

