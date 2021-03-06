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
    @media (max-width: 280px) {
      left: 15px;
    }
    position: relative;
    left: 10px;
    font-size: 14px;
    color: var(--default-yellow);
    align-self: flex-start;
    height: 15px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  form {
    @media (max-width: 280px) {
      text-align: center;
    }
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
    border: 2px solid transparent;
    border-radius: 10px;
    font-size: 18px;

    :focus {
      border: 2px solid var(--default-yellow);
    }
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
  }

  span {
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: var(--default-yellow);
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
