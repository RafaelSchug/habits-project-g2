import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;

  h1 {
    font-size: 36px;
  }

  #loginMainContainer {
    height: calc(100% - 60px);
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 90%;
      max-width: 430px;
      height: 500px;
      background-color: var(--bg-secondary-color);
      border-radius: 15px;
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      animation: left_cont 0.5s 1 ease-in-out;

      #inputBox {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
          width: 270px;
          height: 50px;
          margin-bottom: 10px;
          border-radius: 15px;
          padding-left: 20px;
          padding-right: 20px;
          font-size: 18px;
          border: 2px solid transparent;

          :focus {
            border: 2px solid var(--default-yellow);
          }
        }

        #userInput,
        #passInput {
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          label {
            text-align: start;
            color: var(--default-yellow);
            font-size: 14px;
          }
        }
      }

      #loginButton {
        width: 270px;
        height: 50px;
        border: none;
        border-radius: 10px;
        font-size: 36px;
        margin-top: 20px;
        background-color: var(--default-yellow);
        color: var(--default-black);

        :hover {
          filter: brightness(0.9);
        }
      }

      #noAccountSpan {
        font-size: 24px;

        button {
          background-color: transparent;
          color: var(--default-yellow);
          border: none;
          font-size: 24px;
        }
      }
    }

    #loginSvg {
      margin-left: 10vw;
      animation: right_cont 0.5s 1 ease-in-out;
    }
  }

  @media screen and (max-width: 310px) {
    #loginMainContainer {
      form {
        #inputBox {
          input {
            width: 230px;
          }
        }

        #loginButton {
          width: 230px;
        }

        button {
          border: none;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    #loginSvg {
      display: none;
    }
  }

  @keyframes left_cont {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
  }

  @keyframes right_cont {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
  }
`;
