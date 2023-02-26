import React, { useState, useEffect } from "react";
import { API_LINK } from "../assets/config";
import Header from "./Header";
import MovieDetails from "./MovieDetails";

export default function Body() {
  const [apiData, setApiData] = useState({ data: [], filteredData: [] });
  async function getApiCall() {
    const response = await fetch(API_LINK);
    const data = await response.json();
    setApiData({ data: data.results, filteredData: data.results });
  }
  const updateState = (newState) => {
    setApiData(newState);
  };
  useEffect(() => {
    getApiCall();
  }, []);
  return (
    <>
      <Header state={apiData} updateState={updateState} />
      <MovieDetails state={apiData} updateState={updateState} />
    </>
  );
}
