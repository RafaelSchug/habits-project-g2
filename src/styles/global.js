import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Nunito', sans-serif;
    }

    :root {
        --bg-primary-color: #0092DF;
        --bg-secondary-color: #053F5E;
        --default-black: #232323;
        --default-yellow: #FFEA29;
        --default-white: #F7F9F9;
        --default-gradient: linear-gradient(0deg, #053F5E, #0092DF)
    }

    body {
        /* background: var(--bg-primary-color); */
        background: var(--default-gradient);
        background-attachment: fixed;
        color: var(--default-white);
        min-height: 100vh;
        height: 100%;
    }

    button {
        cursor: pointer;
    }



`