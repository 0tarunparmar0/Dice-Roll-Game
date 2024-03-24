import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';


function StartGame({ toggle }) {
  return (
    <div>
      <Container>
        <img src="/images/dices.png" alt="" />
        <div className="c/images/dices.pngontent">
          <h1>DICE GAME</h1>
          <div className="btn">
            <Button onClick={toggle}>Play Now</Button>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default StartGame;

const Container = styled.div`

height:100vh;
margin: 0 auto;
max-width: 1180px;
display: flex;
justify-content: space-between;
align-items: center;
h1{
    font-size:90px;
    white-space: nowrap;
  }
  .btn{
    display: flex;
    justify-content:center ;
  }

`;

