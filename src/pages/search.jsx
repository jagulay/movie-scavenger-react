import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Landing from '../components/landing';
import SearchResult from '../components/searchresult';

const Search = () => {
//   const { id } = useParams();
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       const { data } = await axios.get(
//         `https://www.omdbapi.com/?imdbID=${id}&apikey=895e4858`
//       );
//       setMovies(data);
//     }
//     fetchMovies();
//   }, []);

  return (
    <>
      <Landing />
      <div>
        <SearchResult />
        {/* {movies.map((movie) => (
          <div>{movie.id}</div>
        ))} */}
      </div>

    </>
  );
};

export default Search;
