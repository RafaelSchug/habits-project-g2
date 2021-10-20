import styled from "styled-components";

export const GroupCard = styled.div`
width: 430px;
height: 240px;
background-color: var(--bg-secondary-color);
border-radius: 10px;
padding: 10px 20px;
margin: 10px;

    p {
        font-size: 22px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 3px;
        }
    }

    button {
        width: 130px;
        height: 40px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        border: transparent;
        margin-top: 20px;
        background-color: var(--default-yellow);
        color: var(--default-black);

        :hover {
            filter: brightness(0.9);
        }
    }
`