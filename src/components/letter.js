import React, { useContext } from "react";
import { AppContext } from "../App";

export const Letter = ({ column, row }) => {
  const { block, word, colorCheck, setColorCheck } = useContext(AppContext);
  const letter = block[column][row];

  const correct = letter === word[row];
  const almost = !correct && letter !== "" && word.includes(letter);
  const letterState = correct ? "correct" : almost ? "almost" : "error";

  console.log(colorCheck);

  return (
    <div className="letter" id={colorCheck ? letterState : ""}>
      {letter}
    </div>
  );
};
