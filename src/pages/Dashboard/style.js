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
        padding: 0 20px;
        gap: 20px;
        min-height: calc(100vh - 140px);

        background: ${props => `url(${props.backgroundSvg})`};
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

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

`

export default Container;