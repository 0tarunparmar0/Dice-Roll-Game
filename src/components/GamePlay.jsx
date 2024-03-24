import React, { useEffect } from 'react'
import { useState } from 'react';
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

function GamePlay() {


  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + min));
  }

  const rollDice = () => {
    // When you not select any number
    if (!selectedNumber) {

      setError("You have not selected any number ")
      return;
    }

    setError("");


    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    console.log("after the number not selected");

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 1)
    }

    setSelectedNumber(undefined)
  }



  const resetScore = () => {

    setScore(0);
  }


  return (

    <GamePlayContainer>
      <div className="top_section">
        <TotalScore score={score} />
        {/* <TotalScore totalScore={totalScore} setTotalScore={setTotalScore} /> */}
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />

      <div className="btns">

        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => {
          setShowRules((prev) => !prev)
        }}>Show Rules</Button>


      </div>

      {
        showRules && <Rules></Rules>
      }

    </GamePlayContainer>

  );
}

export default GamePlay;


const GamePlayContainer = styled.div`
  padding-top: 10px ;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
    }

  .btns{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 8px;
    align-items: center;
    gap: 10px;
  }

`;