import styled from "styled-components";
import RegisterImg from "../../assets/vectors/register.svg";

export const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1200px) {
    flex: 1;
    background: url(${RegisterImg}) no-repeat center;
    background-size: 526px 558px;
    animation: left_cont 0.5s 1 ease-in-out;
    max-width: 50vw;
  }
`;

export const Content = styled.div`
  @media (max-width: 1200px) {
    flex-direction: column;
    height: 500px;
    margin-right: unset;
    width: 430px;
    padding: 0px;
  }

  @media (max-width: 280px) {
    align-items: center;
  }

  margin-right: 10vw;
  width: auto;
  height: auto;
  padding: 40px 50px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  background-color: var(--bg-secondary-color);
  animation: right_cont 0.5s 1 ease-in-out;
  border-radius: 10px;

  .error {
    position: relative;
    top: 5px;
    left: 10px;
    font-size: 12px;
    color: var(--default-yellow);
    text-shadow: 1px 1px 1px black;
    align-self: flex-start;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    @media (max-width: 800px) {
      width: 270px;
    }

    @media (max-width: 280px) {
      width: 230px;
    }

    padding: 10px 15px;
    width: 270px;
    margin: 5px 0 5px 0;
    border: none;
    border-radius: 10px;
    font-size: 18px;
  }
  button {
    font-size: 36px;
    color: var(--default-black);
    background-color: var(--default-yellow);
    border: none;
    border-radius: 10px;
    margin: 5px 0 20px 0;
    padding: 5px 0;
    width: 270px;
    cursor: pointer;
    @media (max-width: 280px) {
      width: 230px;
    }

    @media (min-width: 1200px) {
      transition: transform 0.1s linear, border 0.1s linear;

      :hover {
        transform: scale(1.2);
      }
    }
  }

  span {
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: var(--default-yellow);
  }
`;
