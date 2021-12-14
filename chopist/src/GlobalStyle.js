import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --padding: 5rem;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig:2.5rem;
        --fontXBig:5rem;
        --fontBig:3rem;
        --fontMed:2rem;
        --fontSmall:1.8rem;
        --shadowSoft:0px 3px 6px rgba(0,0,0,0.05);

        @media(max-width:900px){
            --padding: 2rem;
        }
    }

    *{
        box-sizing: inherit;
        font-family: 'Abel', sans-serif;
    }

    html{
        font-size:10px;

        @media(max-width:900px){
            font-size:8px;
        }

    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;


        h1{
            font-size:2rem;
            font-weight:600;
        }
        h3{
            font-size:1.1rem;
            font-weight:600;
        }
        p{
            font-size:1rem;
            color: var(--white);
        }
    }
`