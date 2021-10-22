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
        --default-gradient: linear-gradient(0deg, #053F5E, #0092DF);

        --toastify-color-light: #fff;
        --toastify-color-dark: #121212;
        --toastify-color-info: #3498db;
        --toastify-color-success: purple;
        --toastify-color-warning: #f1c40f;
        --toastify-color-error: #e74c3c;

    }

    .Toastify__toast-theme--colored.Toastify__toast--success {
        color: var(--toastify-text-color-success);
        background: var(--default-yellow);
        border: 2px solid var(--default-black);
        border-radius: 10px;
        color: var(--default-black);

        .Toastify__progress-bar {
            background: var(--default-black);
        }

        .Toastify__close-button--colored {
            
            color: var(--default-black);
        }
    }

    .Toastify__toast-theme--colored.Toastify__toast--error, .Toastify__toast-theme--colored.Toastify__toast--warning {
        color: var(--toastify-text-color-success);
        background: var(--default-black);
        border: 2px solid var(--default-yellow);
        border-radius: 10px;
        color: var(--default-yellow);

        .Toastify__progress-bar {
            background: var(--default-yellow);
        }

        .Toastify__close-button--colored {
            
            color: var(--default-black);
        }
    }

    body {
        
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