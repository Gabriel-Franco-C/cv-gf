import { styled } from "styled-components";

const MainContainer = styled.div`
  background-color: lightBlue;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: -8px;
`;
const NavBar = styled.div`
  background-color: gray;
  height: 5%;
`;
const Title = styled.p`
  color: black;
`;

function MainBackground() {
  return (
    <MainContainer>
      <NavBar>
        <Title>Barra de navegacion</Title>
      </NavBar>
    </MainContainer>
  );
}

export default MainBackground;
