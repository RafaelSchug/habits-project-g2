import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    min-width: 260px;
    max-width: 400px;
    background: #053f5ef0;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0px 0px 3px 3px #3f3b3b;

    .flex {

        display: flex;
        flex-direction: column;
        gap: 10px;


        .info_wrapper {

            > h2{
                padding: 5px 0;
                font-size: 28px;
                gap: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1; /* numero máximo de linhas */
                -webkit-box-orient: vertical;
            }

            p {
                display:flex;
                align-items: center;
                gap: 5px;
                padding: 5px 0;
                font-size: 22px;
                
                svg {
                    font-size: 22px;
                }
            }
        }

        .progress_wrapper {
            width: 100%;
            height: 20px;
            border: 2px solid var(--default-white);
            border-radius: 14px;
            overflow: hidden;

            .progress_bar {
                background: #70FEA9;
                height: 16px;
                transition: all .1s linear;
                border-top-right-radius: 14px;
                border-bottom-right-radius: 14px;
             }
        }

    }

    .button_wrapper {
        min-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;

        button {
            min-width: 160px;
            height: 40px;
            font-weight: bold;
            border-radius: 4px;
            border: none;
            font-size: 16px;
            flex: 1;
            display:flex;
            justify-content: center;
            align-items: center;
            gap: 4px;

            :hover {
                filter: brightness(0.9);
            }

            :active {
                filter: brightness(0.8) saturate(2.8);
            }
        }

        .checkin {
            background: var(--default-yellow);
        }

        .remove {
            background: var(--default-black);
            color: var(--default-yellow);
        }

        .achieved {
            background: transparent;
            border: 2px solid var(--default-white);
            color: var(--default-white);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            animation: achieved_anim .5s 1 ease-in-out;
            pointer-events: none;

        }

        @keyframes achieved_anim {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }

            70%{
                opacity: 1;
                transform: scale(1.1);
            }
        }
    }


    @media screen and (max-width: 768px){
        max-width: unset;
        min-width: 230px;
        flex: 1;
    }


    @media screen and (max-width: 680px){
        min-width: 300px;
    }

    @media screen and (max-width: 500px){
        min-width: 260px;
    }


`

export default Container;