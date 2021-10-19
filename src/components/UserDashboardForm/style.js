import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    min-width: 260px;
    max-width: 300px;
    min-height: 300px;
    background: #0092DF;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 3px 3px #3f3b3b;

    h2 {
        font-size: 32px;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

   
        > div{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 67px;

            label {
                display: block;
                font-size: 14px;
                color: var(--default-yellow);
                text-align: left;
            }
        }
    }

    input {
        width: 100%;
        height: 48px;
        border-radius: 5px;
        font-size: 17px;
        padding: 0 4px;
        border: none;
        outline: none;
        border: 2px solid transparent;

        :focus {
            border: 2px solid var(--default-yellow);
        }
    }

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
        gap: 20px;

        input {
            flex: 1 1 50%;
            height: 48px;
        }
    }

    button {
        background: var(--default-yellow);
        color: var(--default-black);
        height: 40px;
        width: 130px;
        border: none;
        font-weight: bold;
        border-radius: 10px;
        font-size: 16px;
        margin-top: 20px;

    }


    @media screen and (max-width: 500px){

        form {
            gap: 10px;
        }

        .flex {
            gap: 8px;

            label {
                text-align: center;
            }
        }

        input {
            font-size: 16px;
        }
    }


`

export default Container;