import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;

  #loginMainContainer {
    height: calc(100% - 60px);
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 90%;
      max-width: 430px;
      height: 450px;
      background-color: var(--bg-secondary-color);
      border-radius: 15px;
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      #inputBox {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
          width: 270px;
          height: 60px;
          margin-top: 20px;
          border-radius: 15px;
        }
      }

      button {
        border: none;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    #loginSvg {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    #loginMainContainer {
      #loginSvg {
        margin-left: 200px;
      }
    }
  }
`;
