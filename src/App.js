import React, { createContext, useEffect, useState } from "react";
import "./main.css";
import { Item } from "./components/item";
import { blockItem, wordData } from "./components/data";
import { NewButton } from "./components/newButton";

//
export const AppContext = createContext();

function App() {
  //
  const [block, setBlock] = useState(blockItem);
  const [data, setData] = useState(wordData);
  const [randomNum, setRandom] = useState(
    Math.floor(Math.random() * data.length)
  );
  const [word, setWord] = useState(data[randomNum].toUpperCase());
  const [colorCheck, setColorCheck] = useState(false);

  //새게임시작
  const handleNewGame = () => {
    window.location.reload();
  };

  // useEffect(() => {
  //   console.log("컬러첵 변화");
  //   setColorCheck(false);
  // }, [colorCheck]);

  //color
  const wordColoring = (prop) => {
    // 랜덤단어와 체킹
    // 단어에 글자가 포함되는지 체킹
    // 단어의 위치와 글자의 위치가 같은지 체킹
    setColorCheck(prop);
  };

  return (
    <main>
      <h3>Wordle Game</h3>
      <AppContext.Provider
        value={{
          word,
          block,
          setBlock,
          handleNewGame,
          wordColoring,
          colorCheck,
          setColorCheck,
        }}
      >
        <Item />
        <NewButton />
      </AppContext.Provider>
    </main>
  );
}

export default App;
