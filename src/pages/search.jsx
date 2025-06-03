import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Landing from "../components/landing";

function Search() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`https://www.omdbapi.com/?i=${id}&apikey=895e4858`)
      .then((res) => {
        if (!res.ok) throw new Error("Netwrok repsonse was not ok");
        return res.json();
      })
      .then((data) => {
        if (data.Response === "False") {
          throw new Error(data.Error || "Movie not found");
        }
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading movie details for: {id}...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Landing />
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        style={{ maxWidth: "200px" }}
      />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      {/* Add more fields as you like */}
    </div>
  );
}

export default Search;
