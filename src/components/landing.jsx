import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navigation from "./nav";

const Landing = () => {
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDEfault();
    if (searchId.trim()) {
      navigate(`/search/${searchId.trim()}`);
      setSearchId("");
    }
  };

    return (
    <div class="landing">
      <Navigation />
      <div className="movie__srch">
        <h3 className="movie__srch--title">Browse Movies</h3>
        <div className="movie__srch--bar">
          {/* <input type="text" className="movie__srch--input" placeholder="Search movies..." /> */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter IMDb ID (e.g., tt3896198)"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              style={{ padding: "4px" }}
            />
            <button type="submit" style={{ padding: "4px 8px" }}>
              Search
            </button>
          </form>
          <button className="srch__btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Landing;
