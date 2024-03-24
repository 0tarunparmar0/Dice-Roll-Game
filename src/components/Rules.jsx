import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
      <h2> How to play dice game</h2>
      <div className="text">
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>On Currect Guess get that much score.</p>
        <p>Else your score is deducted by -1.</p>

      </div>


    </RulesContainer>

  )
}

export default Rules


const RulesContainer = styled.div`
  
  background-color: wheat;
  padding: 20px 50px;
  
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 40px;
  max-width: 700px;
  /* max-height: 100px; */
  h2{
      font-size: 20px;
  }
.text{
    margin-top: 20px;
  }

`;