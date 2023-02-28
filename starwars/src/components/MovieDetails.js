import React, { useState, useEffect } from "react";
import Shimmer from "../shimmerui/Shimmer";
import "../styles/MovieDetails.css";
import upArrow from "../assets/img/icons8-down-up-16.png";
import downArrow from "../assets/img/icons8-down-arrow-16.png";
import personImg from "../assets/img/icons8-male-user-75.png";
import spaceXImg from "../assets/img/icons8-spacex-starship-75.png";
import planetsImg from "../assets/img/icons8-planet-75.png";
import vechileImg from "../assets/img/icons8-traffic-jam-75.png";
import speciesImg from "../assets/img/icons8-baby-yoda-80.png";
import Characters from "./Characters";

export default function MovieDetails({ state, updateState }) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [clickDiv, setClickDiv] = useState("");
  const [accordian, setAccordian] = useState("");
  // Showing the movie details on clicking
  function movieDetailsSet(episode_id) {
    const data = state.filteredData.filter(
      (item) => item.episode_id === episode_id
    );
    setMovieDetails(data);
    setAccordian("");
    setClickDiv(episode_id); // For displying active div when its clicked
  }

  //dropDown accordian on condition
  function accordianDropDown(accordianValue) {
    setAccordian(accordianValue);
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
        <div className="movie-details-container">
          {movieDetails.length === 0 ? (
            "No Movie Selected"
          ) : (
            <>
              <div className="details">{movieDetails[0].opening_crawl}</div>
              <div className="director" data-testid="director">
                Director: {movieDetails[0].director}
              </div>

              <div
                className={
                  accordian === "People" ? "people  dropdown-details" : "people"
                }
                onClick={() => {
                  accordianDropDown("People");
                }}
              >
                <div>
                  <span className="span-left">People</span>
                  <span className="span-right">
                    <img
                      src={accordian === "People" ? upArrow : downArrow}
                      alt="Up arrow button"
                    />
                  </span>
                </div>

                {accordian === "People" ? (
                  <div className="card-list">
                    {movieDetails[0].characters.map((item, index) => (
                      <Characters
                        key={index}
                        personImg={personImg}
                        characterApi={item}
                        data-testid={"people"}
                      />
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className={
                  accordian === "Species" ? "people dropdown-details" : "people"
                }
                onClick={() => {
                  accordianDropDown("Species");
                }}
              >
                <div>
                  <span className="span-left">Species</span>
                  <span className="span-right">
                    <img
                      src={accordian === "Species" ? upArrow : downArrow}
                      alt="Up arrow button"
                    />
                  </span>
                </div>
                {accordian === "Species" ? (
                  <div className="card-list">
                    {movieDetails[0].species.map((item, index) => (
                      <Characters
                        key={index}
                        personImg={speciesImg}
                        characterApi={item}
                      />
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className={
                  accordian === "Vehicles"
                    ? "people dropdown-details"
                    : "people"
                }
                onClick={() => {
                  accordianDropDown("Vehicles");
                }}
              >
                <div>
                  <span className="span-left">Vehicles</span>
                  <span className="span-right">
                    <img
                      src={accordian === "Vehicles" ? upArrow : downArrow}
                      alt="Up arrow button"
                    />
                  </span>
                  {accordian === "Vehicles" ? (
                    <div className="card-list">
                      {movieDetails[0].vehicles.map((item, index) => (
                        <Characters
                          key={index}
                          personImg={vechileImg}
                          characterApi={item}
                        />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div
                className={
                  accordian === "Starships"
                    ? "people  dropdown-details"
                    : "people"
                }
                onClick={() => {
                  accordianDropDown("Starships");
                }}
              >
                <div>
                  <span className="span-left">Starships</span>
                  <span className="span-right">
                    <img
                      src={accordian === "Starships" ? upArrow : downArrow}
                      alt="Up arrow button"
                    />
                  </span>
                </div>
                {accordian === "Starships" ? (
                  <div className="card-list">
                    {movieDetails[0].starships.map((item, index) => (
                      <Characters
                        key={index}
                        personImg={spaceXImg}
                        characterApi={item}
                      />
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className={
                  accordian === "Planets"
                    ? "people dropdown-details"
                    : "people "
                }
                onClick={() => {
                  accordianDropDown("Planets");
                }}
              >
                <div>
                  <span className="span-left">Planets</span>
                  <span className="span-right">
                    <img
                      src={accordian === "Planets" ? upArrow : downArrow}
                      alt="Up arrow button"
                    />
                  </span>
                </div>
                {accordian === "Planets" ? (
                  <div className="card-list">
                    {movieDetails[0].planets.map((item, index) => (
                      <Characters
                        key={index}
                        personImg={planetsImg}
                        characterApi={item}
                      />
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
