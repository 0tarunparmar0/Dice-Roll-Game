import React, { useState } from 'react'
import styled from 'styled-components';

function RollDice({ currentDice, rollDice }) {



  return (
    <DiceContiner>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p> Click on Dice to Roll</p>
    </DiceContiner>

  )
}

export default RollDice

const DiceContiner = styled.div`
  display: flex;
  margin-top:10px;
  align-items: center;
  flex-direction: column;
  p{

    font-size: 20px;
  }
  .dice{
    cursor: pointer;
  }
`;