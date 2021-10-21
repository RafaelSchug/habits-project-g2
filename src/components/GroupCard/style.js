import styled from "styled-components";

export const GroupCard = styled.div`
width: 430px;
height: auto;
background-color: var(--bg-secondary-color);
border-radius: 10px;
padding: 10px 20px;
margin: 10px;
border: 2px solid transparent;
cursor: pointer;
filter: drop-shadow(0px 6px 5px #3F3B3B);

:hover {
    border: 2px solid var(--default-yellow)
}

    p {
        font-size: 22px;
        display: flex;
        align-items: center;
        margin: 10px 0;

        svg {
            margin-right: 5px;
            min-width: 22px;
        }
    }

    button {
        width: 130px;
        height: 40px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        border: transparent;
        margin: 15px 0;
        background-color: var(--default-yellow);
        color: var(--default-black);

        :hover {
            filter: brightness(0.9);
        }
        
    }

    #subscribed {
        background: transparent;
        border: 2px solid var(--default-white);
        color: var(--default-white);
        cursor: not-allowed;
    }

    #subsButtons {
        display: flex;
        justify-content: space-around;
        gap: 5px;
    }

@media screen and (max-width: 768px) {
    min-width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    height: auto;
    max-width: 400px;

    h2 {
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 20px;
    }
}
`