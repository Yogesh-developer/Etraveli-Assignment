import React, { useState } from "react";
import "../styles/Header.css";
import Dropwdown from "./Dropdown";
export default function Header() {
  const [toggleDropDown, setToggleDropDown] = useState(true);
  return (
    <div className="header">
      <div className="sort-button">
        <button
          type="submit"
          onSubmit={() => {
            setToggleDropDown(true);
          }}
        >
          Sort By
        </button>
        {toggleDropDown ? <Dropwdown /> : ""}
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
        <input type="search" placeholder="Type to search..." />
      </div>
    </div>
  );
}
