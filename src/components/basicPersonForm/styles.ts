import styled from "styled-components";
import { colors } from "@application/styles/colors";

export const FormContainer = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  color: ${colors.black};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;

  .background-image {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
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

      display: flex;
      gap: 2rem;
      justify-content: center;
    }
  }
`;
