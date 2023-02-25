import React from "react";
import "../styles/Dropdown.css";
import marc from "../assets/img/icons8-close-16.png";

export default function Dropwdown() {
  return (
    <div className="dropdown">
      <div className="flex">
        <h5>Sort By</h5>
        <img src={marc} alt="close button" />
      </div>
      <hr />
      <div className="list">Episodes</div>
      <div className="list">Name</div>
    </div>
  );
}
