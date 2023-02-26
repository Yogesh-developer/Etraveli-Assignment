import React, { useState } from "react";
import "../styles/Dropdown.css";
import close from "../assets/img/icons8-close-16.png";

export default function Dropwdown(props) {
  const [onClicklist, setOnlClick] = useState("");

  const togggleDropdown = () => {
    props.toggleDropdown();
  };

  const sortData = (event, sortBy) => {
    event.preventDefault();
    setOnlClick(sortBy);
    props.sortData(sortBy);
  };
  return (
    <div className="dropdown">
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
          sortData(event, "Episodes");
        }}
      >
        Episodes
      </div>
      <div
        className={onClicklist === "Name" ? "list list-onclick" : "list"}
        onClick={(event) => {
          sortData(event, "Name");
        }}
      >
        Name
      </div>
      <div
        className={onClicklist === "Year" ? "list list-onclick" : "list"}
        onClick={(event) => {
          sortData(event, "Year");
        }}
      >
        Year
      </div>
    </div>
  );
}
