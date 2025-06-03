import React from "react";

const Movie = () => {
  return (
    <div className="movie__wrapper">
        <div className="movie">
            <figure className="movie__poster">
                <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg" className="movie__poster--img" alt="${movie.Title}"></img>
            </figure>
            <div className="movie__title">Movie Title</div>
            <div className="movie__year">Realese Date</div>
        </div>
    </div>
  )
};

export default Movie;
