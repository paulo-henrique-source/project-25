import styled from "styled-components";
import { colors } from "@application/styles/colors";

export const FormContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  color: ${colors.black};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;

  .title-wrapper {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;

    .title {
      width: 100%;
    }

    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: auto;
      margin-bottom: 2rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    flex: 1;

    .inputs {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 2rem;

      .inputs-item {
        display: flex;
        gap: 2rem;
        justify-content: center;
      }
    }

    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin: 2rem;
    }
  }
`;
