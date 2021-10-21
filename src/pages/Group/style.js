import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  img {
    width: 60%;
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  h2 {
    font-size: 36px;
    margin: 15px 0;
  }

  p,
  span {
    font-size: 26px;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  #groupCard {
    width: 800px;
    height: 200px;
    padding: 5px 40px;
    background-color: var(--bg-secondary-color);
    border-radius: 10px;
    filter: drop-shadow(0px 0px 10px #3f3b3b);
    animation: left_cont 0.5s 1 ease-in-out;
    #edit {
      width: 80px;
    }
  }

  #modals {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 750px;
    height: 115px;
    animation: card_anim 0.6s 1 ease-in-out;
    h3 {
      font-size: 30px;
      margin: 5px;
    }

    div {
      background-color: var(--bg-primary-color);
      height: 115px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      filter: drop-shadow(0px 0px 10px #3f3b3b);
    }
  }

  #members {
    height: 800px;
    width: 430px;
    padding: 5px 20px;
    background-color: var(--bg-secondary-color);
    margin-left: 50px;
    filter: drop-shadow(0px 0px 10px #3f3b3b);
    border-radius: 10px;
    margin-top: calc((100vh - 825px) / 6);
    animation: right_cont 0.5s 1 ease-in-out;
  }

  #scroll {
    display: flex;
    justify-content: space-around;
    width: 800px;

    .container {
      padding: 0px 20px;
      height: 450px;
      width: 350px;
      background-color: var(--bg-secondary-color);
      filter: drop-shadow(0px 0px 10px #3f3b3b);
      border-radius: 10px;
      animation: left_cont 0.5s 1 ease-in-out;

      .scroll {
        height: 350px;
        overflow-y: auto;
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: var(--bg-secondary-color);
          border-radius: 20px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: var(--default-yellow);
          border-radius: 20px;
        }
      }
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
  @keyframes card_anim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    70% {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  @media (max-width: 1024px) {
    margin-top: 15px;

    img {
      display: none;
    }

    #groupCard {
      width: 620px;
    }

    #members {
      width: 350px;
      margin-left: 20px;
    }

    #modals {
      width: 620px;
    }

    #scroll {
      width: 620px;

      .container {
        width: 300px;
        margin: 10px;
      }
    }
  }

  @media (max-width: 800px) {
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
      font-size: 30px;
      margin: 15px 0;
    }

    p,
    span {
      font-size: 24px;
    }

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    #groupCard {
      width: 320px;
      height: auto;
      padding: 5px 20px;
      #edit {
        width: 100px;
      }
    }

    #modals {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 320px;
      height: auto;
      animation: card_anim 0.6s 1 ease-in-out;
      h3 {
        font-size: 30px;
        margin: 5px;
      }

      div {
        margin: 10px;
      }
    }

    #members {
      min-height: 300px;
      height: auto;
      width: 320px;
      margin: auto;
    }

    #scroll {
      display: flex;
      flex-direction: column;
      width: 320px;

      .container {
        padding: 0px 20px;
        height: auto;
        width: 320px;
        margin: 10px 0px;

        .scroll {
          display: flex;
          min-height: 100px;
          height: auto;
          overflow-x: scroll;
        }
      }
    }
  }

  @media (max-width: 280px) {
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
      font-size: 30px;
      margin: 15px 0;
    }

    p,
    span {
      font-size: 24px;
    }

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    #groupCard {
      width: 260px;
      height: auto;
      padding: 5px 20px;
      #edit {
        width: 100px;
      }
    }

    #modals {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 260px;
      height: auto;
      animation: card_anim 0.6s 1 ease-in-out;
      h3 {
        font-size: 30px;
        margin: 5px;
      }

      div {
        width: 240px;
        margin: 10px;
      }
    }

    #members {
      min-height: 300px;
      height: auto;
      width: 260px;
      margin: auto;
    }

    #scroll {
      display: flex;
      flex-direction: column;
      width: 260px;

      .container {
        padding: 0px 10px;
        height: auto;
        width: 260px;
        margin: 10px 0px;

        .scroll {
          display: flex;
          min-height: 100px;
          height: auto;
          overflow-x: scroll;
        }
      }
    }
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  border: transparent;
  background-color: var(--default-yellow);
  color: var(--default-black);
  :hover {
    filter: brightness(0.9);
  }
`;

export const Subscribed = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0;
  background: transparent;
  border: 2px solid var(--default-white);
  color: var(--default-white);
  cursor: not-allowed;
`;
