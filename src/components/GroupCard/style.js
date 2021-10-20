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
        pointer-events: none;
    }

@media screen and (max-width: 768px) {
    min-width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
    height: auto;
    max-width: 400px;

    h2 {
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 20px;
        /* overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        text-align: start; */
    }
}
`