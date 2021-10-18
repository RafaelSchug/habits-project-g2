import styled from "styled-components";

export const Container = styled.div`
width: 275px;
height: 100vh;
background: var(--default-gradient);
display: flex;
flex-direction: column;
align-items: flex-start;
position: absolute;
left: ${props => props.isOpen ? "0" : "-300px"};
top: 0;
transition: 1s ease;
filter: brightness(1.5);
box-shadow: 2px 2px 15px black;
z-index: 10;


img {
    cursor: pointer;
    padding: 20px 20px 20px 23px;
}

#container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    div {
        display: flex;
        flex-direction: column;
    }
}

button {
    cursor: pointer;
    font-size: 30px;
    line-height: 50px;
    color: var(--default-white);
    background-color: transparent;
    border: 2px solid transparent;
    margin: 10px 0 10px 40px;
    text-align: left;
}


`