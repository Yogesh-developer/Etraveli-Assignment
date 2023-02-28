import React, { useState } from "react";
import "../styles/Dropdown.css";
import close from "../assets/img/icons8-close-16.png";

export default function Dropwdown(props) {
  const [onClicklist, setOnlClick] = useState("");

  // Dropdown toggle functionality
  const togggleDropdown = () => {
    props.toggleDropdown();
  };

  // it will pass the value to parent component for sorting (ex: name,episode,year)
  const sortedData = (sortBy) => {
    setOnlClick(sortBy);
    props.sortData(sortBy);
  };
  return (
    <div className="dropdown" data-testid="dropdown">
      <div className="flex">
        <h5>Sort By</h5>
        <img
          src={close}
          alt="close button"
          className="close-btn"
          onClick={() => {
            togggleDropdown();
          }}
        />
      </div>
      <hr style={{ backgroundColor: "#babfc4" }} />
      <div
        className={onClicklist === "Episodes" ? "list list-onclick" : "list"}
        onClick={(event) => {
          sortedData("Episodes");
        }}
      >
        Episodes
      </div>
      <div
        className={onClicklist === "Name" ? "list list-onclick" : "list"}
        onClick={(event) => {
          sortedData("Name");
        }}
      >
        Name
      </div>
      <div
        className={onClicklist === "Year" ? "list list-onclick" : "list"}
        onClick={(event) => {
          sortedData("Year");
        }}
      >
        Year
      </div>
    </div>
  );
}
