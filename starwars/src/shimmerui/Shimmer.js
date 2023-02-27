import React from "react";
import "../styles/Shimmer.css";

export default function Shimmer() {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            data-testid="shimmer"
            className="shimmer-movie-list"
          ></div>
        ))}
    </>
  );
}
