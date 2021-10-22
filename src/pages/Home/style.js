import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 50px;
    min-height: calc(100vh - 60px);
    height: calc(100% - 60px);
    overflow-x: hidden;

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

    .left_container {
        flex: 1;
        flex-basis: 70%;
        display: flex;
        justify-content: center;
        animation: left_cont .5s 1 ease-in-out;

        .content_wrapper {

            .text_content {

                @keyframes text_anim {
                    5% {
                        color: var(--default-yellow);
                    }

                    25% {
                        color: var(--default-yellow);
                    }

                    30% {
                        color: var(--default-white);
                    }
                }

                position: relative;
                z-index: 1;
                
                h1 {
                    font-size: 54px;
                    line-height: 50px;
                    color: var(--default-yellow);
                    margin-bottom: 20px;
                }
                
                p {
                    font-size: 30px;
                    color: var(--default-white);
                    text-underline-offset: 6px;
                }

                p:nth-child(2){
                    animation: text_anim 6s infinite linear 1s;
                }
                
                p:nth-child(3){
                    animation: text_anim 6s infinite linear 3s;
                }

                p:nth-child(4){
                    animation: text_anim 6s infinite linear 5s;
                }
            }

            img {
                width: 100%;
                max-height: calc(100vh - 410px);
                margin-left: 20px;
            }

        }
    }

    .right_container {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        flex-basis: 30%;
        animation: right_cont .5s 1 ease-in-out;

    }

    .right_container .content_wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;

        button {
            width: 200px;
            height: 50px;
            font-size: 18px;
            border-radius: 5px;
            transition: transform .1s linear, border .1s linear;

            :hover {
                transform: scale(1.1);
            }
        }

        .login_button {
            background: transparent;
            color: var(--default-white);
            border: 1px solid var(--default-white);
        }

        .register_button {
            background: var(--default-yellow);
            border: none;
        }

    }

    
    @media screen and (max-width: 620px){

        padding: 20px;

        .left_container {
            justify-content: flex-start;
            flex-basis: 65%;

            .content_wrapper .text_content {

                h1 {
                    color: var(--default-yellow);
                    font-size: 60px;
                    line-height: 60px;
                    padding: 20px 0;
                }

                p {
                    font-size: 22px;
                    line-height: 35px;
                }


                }
        }

        .right_container {
            flex-basis: 35%;
        }

        .content_wrapper {
        
            img {
                display: none;
            }
        }
    }


    @media screen and (max-height: 600px){

        .content_wrapper {
        
        img {
            display: none;
            }
        }
    }

`