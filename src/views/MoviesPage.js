import Searchbar from "../Components/Searchbar/Searchbar";
import MoviesGallery from "../Components/MoviesGallery/MoviesGallery";
import { useHistory, useLocation } from "react-router-dom";
import { fetchSearchMovie } from "../api";
import { useState, useEffect } from "react";
export default function MoviesPage() {
  // const history = useHistory();
  const location = useLocation();

  const searchOrder = new URLSearchParams(location.search).get("query");
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState(searchOrder ?? "");
 

  useEffect(() => {   
    if (!searchMovie) {
      return;
      }     
    fetchSearchMovie(searchMovie).then((request) => {
      setMovies(request.results);
    });
  }, [searchMovie]);
 

  const onSubmit = (searchMovie) => {
    setSearchMovie(searchMovie);
    //  history.push({ ...location, search: `query=${searchMovie}` });
    setMovies([]);
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />

      {movies && <MoviesGallery movies={movies} />}
    </>
  );
}
