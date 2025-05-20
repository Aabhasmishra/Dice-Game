import styled from "styled-components";
// import styles from "./HomePage.module.css"
import { Button } from "../../Styled/Button";

const HomePage = ( { toggle } ) => {
  return (
    <Container>
      <img src="/Images/dice1.png" alt="Dice 1" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
      display: flex;
      flex-direction: column;
      align-items: end;

      h1{     /* --> Selecting class "content" h1 tag inside the "Container" */
        font-size: 96px;
        font-weight: 700;
        white-space: nowrap;
      }
    }
`;
