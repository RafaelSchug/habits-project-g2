import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none;
    }

    :root {
        --bg-primary-color: #232323;
        --bg-secondary-color: #053F5E;
        --default-blue: #115173;
        --default-yellow: #FFD700;
        --default-white: #F7F9F9;
    }

    body {
        background: var(---bg-primary-color);
        color: var(---default-white);
        font-family: 'Nunito';
    }



`