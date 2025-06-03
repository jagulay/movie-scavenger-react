import React from "react";
import Movie from './ui/movie';

const SearchResult = () => {
  return (
    <div>
      <section id="search">
        <div className="container">
            <div className="row">
                <h3 className="results__header">Search Results:</h3>
                <div className="movie__list"></div>
            </div>
        </div>
        <Movie />
    </section>
    </div>
  )
};

export default SearchResult;
