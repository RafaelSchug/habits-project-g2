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

    @media screen and (max-width: 1024px) {
        img {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        height: 100%;
        margin-top: 40px;
        
        #content {
            flex-direction: column;
            justify-content: flex-start;
            height: 100%;
            gap: 30px;
            align-items: center;
        }

        input {
            width: 95%;
        }
    }

`

export const FormContainer = styled.div`

text-align: center;
min-width: 300px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--bg-primary-color);
border-radius: 10px;
filter: drop-shadow(0px 0px 5px #3F3B3B);
animation: form_anim .5s 1 ease-in-out; 

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
            margin: 20px;
            background-color: var(--default-yellow);
            color: var(--default-black);

            :hover {
                filter: brightness(0.9);
            }
        }

@keyframes form_anim {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
}

@media screen and (max-width: 768px) {
    min-width: 265px;
    width: 50%;

    .inputs {
        align-items: center;
    }
}

`

export const GroupsContainer = styled.div`

width: 55%;
display: flex;
flex-direction: column;
justify-content: center;
height: calc(100vh - 115px);
align-items: center;
max-height: 90%;

#groupSearch {
    width: 75%;
    height: 185px;
    background-color: var(--bg-primary-color);
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 630px;
    min-width: 315px;
    filter: drop-shadow(0px 0px 10px #3F3B3B);
    animation: search_anim .5s 1 ease-in-out; 

    h2 {
        margin-top: 0;
    }
}

    #searchForm {
        width: 90%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        margin: 10px;
        justify-content: center;
    }

    #searchInput {
        width: 90%;
        margin-bottom: 0;
        border-radius: 5px;
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
        overflow-x: hidden;
        margin-top: 10px;
        box-sizing: border-box;
        height: 585px;

        ::-webkit-scrollbar {
            width: 12px;               
        }

        ::-webkit-scrollbar-track {
            background: var(--bg-secondary-color);
            border-radius: 20px;    
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--default-yellow);   
            border-radius: 20px;
        }
    }

    #groupsContainer {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        #notFound, #searching {
            color: var(--default-yellow);
            font-size: 22px;
            font-weight: 600;
        }

        > :nth-child(even){
            animation: card_anim .6s 1 ease-in-out;
        }
        > :nth-child(odd){
            animation: card_anim .5s 1 ease-in-out;
        }
    }

    #buttonsContainer {
        button {
            width: 130px;
            height: 40px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            border: transparent;
            margin: 20px;
            background-color: var(--default-yellow);
            color: var(--default-black);

            :hover {
                filter: brightness(0.9);
            }

        }
    }

    @keyframes search_anim {
        from {
            opacity: 0;
            transform: translateY(-100px);
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

@media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;

    #groups {
        overflow-y: initial;
        overflow-x: initial;
        flex: 1;
    }

    #groupSearch {
        min-width: 260px;
        width: 50%;
        height: auto;

        h2 {
            margin: 15px 0;
        }
    }

    #searchForm {
        flex-direction: column;

        #searchInput, #searchButton {
            border-radius: 5px;
            margin-bottom: 10px;
        }
    }

    #groupsContainer {
        justify-content: center;
    }
}

`