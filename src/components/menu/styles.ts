import styled from "styled-components";
import { colors } from "@application/styles/colors";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.greenLight};
  color: ${colors.white};
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;

  .hamburguer-container {
    transition: transform 0.3s ease-in-out;
    display: flex;
    margin-bottom: 1rem;

    div {
      cursor: pointer;
    }
  }

  .open {
    justify-content: flex-end;
  }
  .close {
    justify-content: flex-end;
  }

  .menu-items-container {
    transition: transform 0.3s ease-in-out;
    &.open {
      transform: translateX(0);
    }
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .description {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    font-weight: 300;
  }

  .items {
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    span {
      font-size: 1.2rem;
      cursor: pointer;
    }

    .item {
      display: flex;
      color: ${colors.secondaryWhite};
    }

    .item-content-open {
      transition: transform 0.3s ease-in-out;
      display: flex;
      color: ${colors.secondaryWhite};
      position: relative;
      cursor: pointer;
      padding-bottom: 4px;
      align-items: center;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${colors.white};
        transition: width 0.3s ease-in-out;
      }

      &:not(.selected):hover {
        color: ${colors.white};
      }

      &:not(.selected):hover::after {
        width: 100%;
      }
    }

    .item-content-close {
      display: flex;
      color: ${colors.secondaryWhite};
      position: relative;
      cursor: pointer;
      padding-bottom: 4px;
      align-items: center;

      &:not(.selected):hover {
        color: ${colors.white};
      }

      &:not(.selected):hover::after {
        width: 100%;
      }
    }

    .selected-open {
      color: ${colors.white};
      border-bottom: 2px solid ${colors.white};
    }

    .selected-close {
      color: ${colors.white};
    }

    .icon-open {
      display: flex;
      padding-right: 0.5rem;
    }

    .icon-close {
      display: flex;
    }
  }

  .items-open {
    display: flex;
    align-items: flex-start;
  }
  .items-close {
    display: flex;
    align-items: center;
  }
`;
