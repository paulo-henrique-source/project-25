import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${colors.tertiaryWhite};
  flex-direction: column;
  width: 100%;

  @media (min-width: 640px) {
    padding-left: 3rem;
  }

  .timeline {
    margin: 5vh;
  }

  .card {
    display: flex;
    margin: 0vh 5vh 5vh 5vh;
    background-color: ${colors.white};
    height: 100%;
    box-shadow: ${colors.blackBoxShadow} 0px 2px 8px 0px;
    overflow: auto;

    .menu-container {
      height: 100%;
    }

    .form-container {
      width: 100%;
      height: 100%;
    }
  }
`;
