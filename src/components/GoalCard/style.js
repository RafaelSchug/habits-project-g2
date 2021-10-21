import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--bg-primary-color);
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  height: fit-content;
  margin: 10px;

  span {
    font-size: 28px;
    margin: 10px;
  }

  p {
    font-size: 24px;
    margin: 10px;
  }

  button {
    margin: 5px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-width: 250px;
    width: auto;
    height: 250px;
    span {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 280px) {
    min-width: 220px;
  }
`;
export const CardButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  border: transparent;
  margin: 10px 0;
  background-color: var(--default-yellow);
  color: var(--default-black);

  :hover {
    filter: brightness(0.9);
  }
  @media (max-width: 800px) {
    width: 90px;
    :hover {
      filter: unset;
    }
  }
`;

export const AchievedButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0;
  background: transparent;
  border: 2px solid var(--default-white);
  color: var(--default-white);
  cursor: not-allowed;
  @media (max-width: 800px) {
    width: 90px;
  }
`;

export const DeleteButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  border: transparent;
  margin: 15px 0;
  background-color: var(--default-black);
  color: var(--default-yellow);

  :hover {
    filter: brightness(0.9);
  }
  @media (max-width: 800px) {
    width: 90px;
    :hover {
      filter: unset;
    }
  }
`;
