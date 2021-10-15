import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none;
    }

    :root {
        --bg-primary-color: #0092DF;
        --bg-secondary-color: #053F5E;
        --default-black: #232323;
        --default-yellow: #FFD700;
        --default-white: #F7F9F9;
        --default-gradient: linear-gradient(0deg, #053F5E, #0092DF)
    }

    body {
        /* background: var(--bg-primary-color); */
        background: var(--default-gradient);
        background-attachment: fixed;
        color: var(--default-white);
        font-family: 'Nunito', sans-serif;
        min-height: 100vh;
        height: 100%;
    }



`