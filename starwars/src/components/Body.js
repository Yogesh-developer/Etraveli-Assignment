import React, { useEffect, useState } from "react";
import { API_LINK } from "../assets/config";
import Shimmer from "../shimmerui/Shimmer";
import "../styles/Body.css";

export default function Body() {
  const [movieList, setMovieList] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  async function getApiCall() {
    const response = await fetch(API_LINK);
    const data = await response.json();
    setMovieList(data.results);
    console.log(data.results);
  }
  function movieDetailsSet(episode_id) {
    console.log(episode_id);
    const data = movieList.filter((item) => item.episode_id === episode_id);
    console.log(data);
    setMovieDetails(data);
  }
  useEffect(() => {
    getApiCall();
  }, []);
  return (
    <div className="movie-info">
      <div className="movie-list">
        {movieList.length === 0 ? (
          <Shimmer />
        ) : (
          movieList.map((item) => (
            <div
              className="list-item"
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
          "Movie details no"
        ) : (
          <>
            <div className="details">{movieDetails[0].opening_crawl}</div>
            <div className="director">Director: {movieDetails[0].director}</div>
          </>
        )}
      </div>
    </div>
  );
}
