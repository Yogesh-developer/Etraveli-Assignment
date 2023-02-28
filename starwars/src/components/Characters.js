import React, { useEffect, useState } from "react";

export default function Characters({ personImg, characterApi }) {
  const [characterDetails, setCharacterDetails] = useState("");
  const getCharacterApitData = async (characterApi) => {
    const data = await fetch(characterApi);
    const result = await data.json();
    setCharacterDetails(result);
  };
  useEffect(() => {
    getCharacterApitData(characterApi);
  }, [characterApi]);
  return (
    <div className="card" data-testid="character">
      <img src={personImg} alt="person" />
      <h6>{characterDetails.name}</h6>
    </div>
  );
}
