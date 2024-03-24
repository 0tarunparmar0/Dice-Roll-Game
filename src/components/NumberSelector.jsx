import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelector({
  error, setError, selectedNumber, setSelectedNumber
}) {

  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("");
  }
  return (

    <NumberSelectorContainer>
      <p className='errorstyle'>{error}</p>
      <div className='flex'>

        {
          array.map((value, i) => (
            <Box
              // isselected={value === selectedNumber ? true : false}
              isselected={value === selectedNumber}
              key={i} onClick={
                () => numberSelectorHandler(value)
              }
            >{value}</Box>
          ))
        }
      </div>
      <p> Select Number :D </p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;
  .flex{
    display: flex;
    gap:24px;
  }
  p{
    margin-top: 10px;
    font-size:20px;
    font-weight: 600;
  }
  .errorstyle{
    color: red;
    margin-bottom: 10px;
  }
`;


const Box = styled.div`

  height:50px;
  width: 50px;
  border:2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? 'black' : 'white')} ;
  color: ${(props) => (props.isselected ? 'white' : 'black')} ;
`;