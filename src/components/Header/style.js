import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  #menu-logo {
    display: flex;
    align-items: center;
    svg {
      font-size: 50px;
      margin-right: 20px;
      margin-left: 5px;
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }

  #buttonsDiv {
    display: flex;
    align-items: center;
    margin-right: 10px;

    #loginButton {
      background-color: transparent;
      border: none;
      color: var(--default-white);
      margin-right: 10px;
      :hover {
        filter: brightness(0.9);
      }
    }
    button {
      background-color: var(--default-white);
      height: 35px;
      width: 150px;
      border: none;
      border-radius: 10px;
      font-size: 18px;
    }
    button:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 768px) {
    #buttonsDiv {
      display: none;
    }
    #logo {
      display: none;
    }
  }
`;
