import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  #newGoalsActModal {
    width: 250px;
    height: 350px;
    background-color: #0092dfcc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      color: var(--default-white);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 20px;

      input {
        width: 230px;
        height: 50px;
        border: none;
        border-radius: 10px;
        padding: 0px 10px 0px 10px;
        font-size: 18px;
      }
    }

    button {
      background-color: var(--default-yellow);
      border: none;
      border-radius: 10px;
      width: 150px;
      height: 50px;
      font-size: 18px;
      font-weight: 550;
    }
  }

  @media screen and (min-width: 360px) {
    #newGoalsActModal {
      width: 340px;
      height: 350px;

      div {
        input {
          width: 300px;
          height: 50px;
        }
      }

      button {
        width: 150px;
        height: 50px;
      }
    }
  }

  @media screen and (min-width: 550px) {
    #newGoalsActModal {
      width: 500px;
      height: 350px;

      div {
        input {
          width: 350px;
          height: 50px;
        }
      }

      button {
        width: 150px;
        height: 50px;
      }
    }
  }
`;
