import React, { useState, useEffect } from "react";
import Shimmer from "../shimmerui/Shimmer";
import "../styles/MovieDetails.css";

export default function MovieDetails({ state, updateState }) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [clickDiv, setClickDiv] = useState("");

  // Showing the movie details on clicking
  function movieDetailsSet(episode_id) {
    const data = state.filteredData.filter(
      (item) => item.episode_id === episode_id
    );
    setMovieDetails(data);
    setClickDiv(episode_id); // For displying active div when its clicked
  }

  useEffect(() => {
    setMovieDetails([]); // after the filter it will null the movie details
    setClickDiv("");
  }, [state.filteredData]);

  return (
    <div className="movie-info">
      <div className="movie-list" data-testid="movies_list">
        {state.data.length === 0 ? (
          <Shimmer />
        ) : state.filteredData.length === 0 ? (
          "Result Not Found"
        ) : (
          state.filteredData.map((item) => (
            <div
              data-testid="list-item"
              className={
                item.episode_id === clickDiv
                  ? "list-item div-click-color"
                  : "list-item"
              }
              key={item.episode_id}
              onClick={() => {
                movieDetailsSet(item.episode_id);
              }}
            >
              <div>Episode {item.episode_id}</div>
              <div>{item.title}</div>
              <div>{item.release_date}</div>
            </div>
          ))
        )}
      </div>

      <div className="divider"></div>

      <div className="movie-details">
        {movieDetails.length === 0 ? (
          "No Movie Selected"
        ) : (
          <>
            <div className="details">{movieDetails[0].opening_crawl}</div>
            <div className="director" data-testid="director">
              Director: {movieDetails[0].director}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
