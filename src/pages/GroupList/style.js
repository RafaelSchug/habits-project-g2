import styled from "styled-components";

export const Container = styled.div`

height: calc(100vh - 60px);
display: flex;
justify-content: center;
align-items: center;
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
        font-size: 28px;
        margin: 15px 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label {
        text-align: start;
        color: var(--default-yellow);
        font-size: 14px;
    }

    input {
        width: 270px;
        height: 50px;
        margin-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 18px;
        border-radius: 5px;
        border: 2px solid transparent;

        :focus {
            border: 2px solid var(--default-yellow);
        }
    }

    #content {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

`

export const FormContainer = styled.div`

text-align: center;
min-width: 300px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--bg-secondary-color);
border-radius: 10px;

    .inputs {
        height: 82px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

        #addButton {
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

export const GroupsContainer = styled.div`

width: 70%;
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 760px;

#groupSearch {
    width: 500px;
    height: 155px;
    background-color: var(--bg-primary-color);
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        margin-top: 0;
    }
}

    #searchForm {
        width: 90%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        margin: 0 10px;
    }

    #searchInput {
        width: 90%;
        margin-bottom: 0;
        border-radius: 5px 0 0 5px;
    }

    #searchButton {
        width: 130px;
        height: 50px;
        border-radius: 0 5px 5px 0;
        font-size: 16px;
        font-weight: 600;
        border: transparent;
        background-color: var(--default-yellow);
        color: var(--default-black);

        :hover {
            filter: brightness(0.9);
        }
    }

    #groups {
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        margin-top: 10px;
        box-sizing: border-box;
        height: 585px;
    }
`