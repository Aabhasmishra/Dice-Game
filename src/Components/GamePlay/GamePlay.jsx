import styled from "styled-components";
import TotalScores from "../TotalScore/TotalScore";
import NumberSelector from '../NumberSelector/NumberSelector';
import RoleDice from '../RoleDice/RoleDice';
import Rules from "../Rules/Rules"
import { useState } from "react";
import { Button } from "../../Styled/Button"
import { OutlineButton } from "../../Styled/Button"

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();   // --> We can use selectedNumber in all the child components by creatin it in parent.
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return  Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
      if(!selectedNumber){
        setError("You have not selected any number");
        return;
      }    // --> If number is not selected then "Total Score" value and dice number dosent change.

      const randomNumber = generateRandomNumber(1, 7);
      // console.log(randomNumber);
      setCurrentDice((prev) => randomNumber);


      if (selectedNumber == randomNumber){
        setScore((prev) => prev + randomNumber);
      }
      else{
        setScore((prev) => prev - 2);
      }

      setSelectedNumber(0);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScores 
          score = {score}
        />
        <NumberSelector 
          error = {error}
          setError={setError}
          selectedNumber = {selectedNumber}
          setSelectedNumber={setSelectedNumber} 
        />
      </div>
      <RoleDice 
        currentDice = {currentDice}
        roleDice = {roleDice}
      />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setshowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules</Button>
      </div>

      {showRules && <Rules />}    {/* --> If showRules is true then it will "Rules" component will appear */}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 30px;
  }

  .btns{
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 27px;
  }
`