import styles from "./ViewStyle.module.css";
import { useEffect, useState } from "react";
import { fetchReviewsMovie } from "../api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsMovie(movieId).then((request) => setReviews(request.results));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul className={styles.reviewsList}>
          {reviews.map((item) => (
            <li key={item.id}>
              <p className={styles.reviewsAuthor}>Author: {item.author}</p>
              <p className={styles.reviewText}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not reviews yet</p>
      )}
    </>
  );
}
