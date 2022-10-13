import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: Roboto condensed;
        font-weight: bold;
        color: ${({ theme }) => theme.fontPrimary};
    }
    a{
        text-decoration: none;
    }

`
