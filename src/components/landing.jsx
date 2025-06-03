import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Navigation from './nav';

const Landing = () => {
  return (
    <div class="landing">
        <Navigation />
        <div className="movie__srch">
            <h3 className="movie__srch--title">Browse Movies</h3>
            <div className="movie__srch--bar">
                <input type="text" className="movie__srch--input" placeholder="Search movies..." />
                <button className="srch__btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />                </button>
            </div>
        </div>
        <div className="overlay"></div>
    </div>
  )
};

export default Landing;
