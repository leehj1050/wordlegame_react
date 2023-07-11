import React, { useContext } from "react";
import App, { AppContext } from "../App";

export const NewButton = () => {
  const { handleNewGame } = useContext(AppContext);
  return (
    <h3>
      <button
        style={{ marginTop: "1.5em", borderRadius: "10px", padding: "0.5em" }}
        onClick={handleNewGame}
      >
        New Game
      </button>
    </h3>
  );
};
