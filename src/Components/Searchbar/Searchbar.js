import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

const Searchbar = ({ onSubmit }) => {
  const history = useHistory();
  const location = useLocation();
  //  const searchOrder = new URLSearchParams(location.search).get('query');
  const [searchMovieName, setSearchMovieName] = useState("");
  
 
  
  const onInputChange = (event) => {   
   setSearchMovieName( event.currentTarget.value.toLowerCase()    );
  };
  const onFormSubmit = (event) => {
    //  console.log(history);
    // console.log(location);
    history.push({...location, search:`query=${searchMovieName}`})
    event.preventDefault();
    if (searchMovieName.trim() === "") {
      return toast("Movie is required!");
    }
   onSubmit(searchMovieName);
    setSearchMovieName(  "" );
  };

  return (
          <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={onFormSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={searchMovieName}
            onChange={onInputChange}
          />
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </header>
  )
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;