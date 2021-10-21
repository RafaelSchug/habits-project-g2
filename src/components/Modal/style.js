import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  #aboutModal {
    width: 250px;
    height: 400px;
    background-color: #0092dfcc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    text-shadow: 1px 1px 1px black;
    padding: 0px 10px 0px 10px;

    .textDiv {
      position: relative;

      img {
        position: absolute;
        top: 20px;
        right: 0px;
      }

      h1 {
        position: relative;
        z-index: 1;
        font-size: 18px;
      }

      p {
        position: relative;
        z-index: 1;
        font-size: 12px;
        width: 75%;
      }
    }

    #communityDiv {
      text-align: right;

      img {
        left: 0px;
      }

      p {
        float: right;
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

    @media screen and (min-width: 320px) {
      width: 300px;
      height: 450px;
      padding: 0px 10px 0px 10px;

      .textDiv {
        h1 {
          font-size: 24px;
        }

        p {
          font-size: 18px;
        }
      }
    }

    @media screen and (min-width: 700px) {
      width: 600px;
      height: 750px;
      padding: 0px 60px 0px 60px;

      .textDiv {
        h1 {
          font-size: 36px;
        }

        p {
          font-size: 24px;
        }
      }
    }
  }

  #contactModal {
    width: 250px;
    height: 400px;
    background-color: #0092dfcc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #profileDiv {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0px 20px 0px 20px;

      .devProfile {
        width: calc(100% / 2);
        max-width: 205px;
        margin-bottom: 30px;

        img {
          width: 60%;
          max-width: 110px;
        }

        h2 {
          font-size: 14px;
          font-weight: bold;
        }

        .devSocial {
          display: flex;
          justify-content: center;
          gap: 10px;

          a {
            width: 40px;
            height: 40px;
          }

          img {
            width: 100%;
            max-width: 50px;

            :hover {
              filter: brightness(0.9);
            }
          }
        }
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

      :hover {
        filter: brightness(0.9);
      }
    }

    @media screen and (min-width: 320px) {
      width: 300px;
      height: 450px;

      #profileDiv {
        .devProfile {
          h2 {
            font-size: 16px;
          }

          .devSocial {
            a {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }

    @media screen and (min-width: 700px) {
      width: 650px;
      height: 650px;

      #profileDiv {
        padding: 20px 50px 20px 50px;
        .devProfile {
          h2 {
            font-size: 24px;
          }
        }
      }
    }
  }

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

      :hover {
        filter: brightness(0.9);
      }
    }

    @media screen and (min-width: 360px) {
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

    @media screen and (min-width: 550px) {
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

      :hover {
        filter: brightness(0.9);
      }
    }
  }
`;
