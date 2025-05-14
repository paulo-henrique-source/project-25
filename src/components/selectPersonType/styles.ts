import styled, { css } from "styled-components";

interface OptionProps {
  $isactive: boolean;
}

export const Container = styled.div`
  background-color: #e4e4e4;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const Option = styled.div<OptionProps>`
  width: 50%;
  background-color: #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  color: black;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }

  .pfIcon {
    transition: color 0.4s ease;
    position: relative;
    top: -25px;
    width: 100%;
    height: auto;
    max-height: 300px;
    margin: auto 0;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  .pjIcon {
    transition: color 0.4s ease;
    width: 100%;
    height: auto;
    max-height: 300px;
    margin: auto 0;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  p {
    margin-top: 4rem;
    font-weight: bold;
    font-size: 2rem;

    @media (max-width: 1200px) {
      margin-top: 4rem;
      font-size: 1.75rem;
    }

    @media (max-width: 992px) {
      margin-top: 4rem;
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      margin-top: 1rem;
      font-size: 1.25rem;
    }

    @media (max-width: 576px) {
      margin-top: 1rem;
      font-size: 1rem;
    }

    @media (max-width: 400px) {
      margin-top: 1rem;
      font-size: 0.9rem;
    }
  }

  ${({ $isactive }) =>
    $isactive &&
    css`
      background-color: #5bb4ff;
      color: white;

      svg {
        color: #00b96b;
      }
    `}
`;

// Aqui você pode garantir que a prop 'isActive' não seja passada diretamente para o DOM
Option.defaultProps = {
  $isactive: false,
};
