import styled from "styled-components";
import HomePage from "./Components/HomePage/HomePage";
import GamePlay from "./Components/GamePlay/GamePlay";
import { useState } from "react";


function App() {
  const [isGameStarted, setIsGameStarted] =   useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);    {/* false becomes true and true becomes false */}
  };
  
  return (
    <div>
      {isGameStarted ? <GamePlay /> : <HomePage toggle={toggleGamePlay} />}
    </div>
  )
}

export default App
