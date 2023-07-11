import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { Letter } from "./letter";

let moveColumn = 0;
let moveLow = 0;

export const Item = () => {
  const { block, setBlock, word, wordColoring } = useContext(AppContext);
  // const [moveInfo, setMoveInfo] = useState({ column: 0, row: 0 });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => document.removeEventListener("keydown", handleKeyboard);
  }, []);

  //
  const handleKeyboard = useCallback((e) => {
    const currentBlock = [...block];

    if (e.key.length < 2) {
      //알파벳 입력
      currentBlock[moveColumn][moveLow] = e.key.toUpperCase();
      if (moveLow <= 2) {
        moveLow += 1;
      } else {
        moveColumn += 1;
        moveLow = 0;
      }
    } else {
      //글자외 다른 키 클릭시
      if (e.key === "Backspace") {
        if (moveLow <= 0) {
          currentBlock[moveColumn][moveLow - 1] = "";
          moveLow = 0;
        } else {
          moveLow -= 1;
          currentBlock[moveColumn][moveLow] = "";
        }
      } else if (e.key === "Enter") {
        wordColoring(true);
      }
    }
    setBlock(currentBlock);
  });

  // console.log("row >>> ", moveInfo);
  // console.log("block >>> ", block);

  console.log(word);

  return (
    <div className="container">
      <div className="item">
        <Letter column={0} row={0} block={block} />
        <Letter column={0} row={1} block={block} />
        <Letter column={0} row={2} block={block} />
        <Letter column={0} row={3} block={block} />
      </div>
      <div className="item">
        <Letter column={1} row={0} block={block} />
        <Letter column={1} row={1} block={block} />
        <Letter column={1} row={2} block={block} />
        <Letter column={1} row={3} block={block} />
      </div>
      <div className="item">
        <Letter column={2} row={0} block={block} />
        <Letter column={2} row={1} block={block} />
        <Letter column={2} row={2} block={block} />
        <Letter column={2} row={3} block={block} />
      </div>
      <div className="item">
        <Letter column={3} row={0} block={block} />
        <Letter column={3} row={1} block={block} />
        <Letter column={3} row={2} block={block} />
        <Letter column={3} row={3} block={block} />
      </div>
      <div className="item">
        <Letter column={4} row={0} block={block} />
        <Letter column={4} row={1} block={block} />
        <Letter column={4} row={2} block={block} />
        <Letter column={4} row={3} block={block} />
      </div>
    </div>
  );
};
