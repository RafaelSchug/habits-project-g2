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

    #content {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

        #formContainer {
            text-align: center;
            min-width: 300px;
            height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--bg-secondary-color);
            border-radius: 10px;
        }

            h2 {
                font-size: 32px;
                margin: 15px 0;
            }

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .inputs {
                height: 82px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
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

                label {
                    text-align: start;
                    color: var(--default-yellow);
                    font-size: 14px;
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
        
        #groupsContainer {
            width: 70%;
            height: 740px;
            display: flex;
            flex-wrap: wrap;
        }


`