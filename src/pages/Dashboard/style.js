import styled from "styled-components";

const Container = styled.div`

    min-height: calc(100vh - 60px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;
    
    .left_container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 20px;

        > :nth-child(n){
            animation: form_anim .5s 1 ease-in-out;
        }
    }

    .right_container {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        padding: 5px 20px;
        gap: 20px;
        min-height: calc(100vh - 140px);
        height: calc(100vh - 140px);
        min-width: 330px;
        overflow-y: auto;

        background: ${props => `url(${props.backgroundSvg})`};
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        ::-webkit-scrollbar{
            width: 13px;
            height: 13px;
        }
        ::-webkit-scrollbar-thumb{
            background: var(--bg-primary-color);
            }
        ::-webkit-scrollbar-thumb:hover{
            background: #FFEA29;
        }
        ::-webkit-scrollbar-track{
            background: var(--bg-secondary-color);
            box-shadow: inset 0px 0px 0px 0px #F0F0F0;
        }

        
        > :nth-child(even){
            animation: card_anim .6s 1 ease-in-out;
        }

        > :nth-child(odd){
            animation: card_anim .5s 1 ease-in-out;
        }
    }

    @keyframes form_anim {
        from {
            opacity: 0;
            transform: translateX(-100px);
        }
    }

    @keyframes card_anim {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        70% {
            opacity: 1;
            transform: scale(1.05);
        }
    }

    @media screen and (max-width: 1024px){
        .right_container {
            background: unset;
        }
    }

    @media screen and (max-width: 768px){
        .right_container {
            min-width: 430px;
            min-height: unset;
            height: 100%;
            overflow-y: unset;
            background: unset;

        }
    }

    @media screen and (max-width: 500px){
        .left_container {
            flex: 100%;
        }
        .right_container {
            min-width: unset;
        }
    }

    

`

export default Container;