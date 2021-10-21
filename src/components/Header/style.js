import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 60px;
  background-color: #0092df;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 20px var(--default-black);
  padding: 5px;
  z-index: 3;

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
