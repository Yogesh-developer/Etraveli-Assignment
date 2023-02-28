import React, { useState } from "react";
import "../styles/Header.css";
import Dropwdown from "./Dropdown";
import sort from "../assets/img/icons8-sort-24.png";

export default function Header({ state, updateState }) {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  //it will filter the data on the basis of search
  const onChangeHandler = (event) => {
    event.preventDefault();
    const filterData = state.data.filter((list) =>
      list.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    updateState({ data: state.data, filteredData: filterData });
  };
  // toggle the dropdown
  const toggle = () => {
    setToggleDropDown((prevState) => !prevState);
  };

  // it will sort the data by input from the Dopdown Component
  const sortData = (sortBy) => {
    if (sortBy === "Name") {
      const sortDataName = state.filteredData.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      updateState({ data: state.data, filteredData: sortDataName });
    } else if (sortBy === "Episodes") {
      const sortDataEpisode = state.filteredData.sort(
        (a, b) => a.episode_id - b.episode_id
      );
      updateState({ data: state.data, filteredData: sortDataEpisode });
    } else {
      const sortdataYear = state.filteredData.sort((a, b) => {
        const year1 = new Date(a.release_date).getFullYear();
        const year2 = new Date(b.release_date).getFullYear();
        return year1 - year2;
      });
      updateState({ data: state.data, filteredData: sortdataYear });
    }
  };

  return (
    <div className="header">
      <div className="sort-button">
        <button
          className="submit-btn"
          onClick={() => {
            toggle();
          }}
        >
          Sort By
        </button>
        <button
          className="submit-btn-icon"
          test-dataid="button"
          onClick={() => {
            toggle();
          }}
        >
          <img src={sort} alt="sort" />
        </button>

        {toggleDropDown ? (
          <Dropwdown toggleDropdown={toggle} sortData={sortData} />
        ) : (
          ""
        )}
      </div>
      <div className="input-search">
        <svg
          className="svg-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M409.6 672c57.6 0 112-19.2 156.8-54.4l265.6 265.6 22.4-22.4 22.4-22.4-265.6-265.6c32-44.8 54.4-96 54.4-156.8 0-140.8-115.2-256-256-256s-256 115.2-256 256c3.2 140.8 115.2 256 256 256z m0-448c105.6 0 192 86.4 192 192s-86.4 192-192 192-192-86.4-192-192 86.4-192 192-192z"
            fill="#707070"
          />
        </svg>
        <input
          type="search"
          onChange={(event) => onChangeHandler(event)}
          placeholder="Type to search..."
        />
      </div>
    </div>
  );
}
