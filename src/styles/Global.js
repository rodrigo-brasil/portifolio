import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body{
    scroll-behavior: smooth; 
}

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: calc(14px + (24 - 14) * ((100vw - 300px) / (3000 - 300)));
    margin: 0;
  }

  #root {
    position: relative;
  }

  :is(h1, h2, h3, h4, h5, h6) {
      line-height: 1.6;
    }

  p {
    line-height: 1.25;
  }
  
  img {
    max-width: 100%;
  }

    input,
    button,
    a {
        font-family: "Roboto Slab", serif;
    }

    button, a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        cursor: pointer;
        text-decoration: none;
        outline: none;
        border: none;
    }

    ul {
        list-style: none;
    }
`

export default GlobalStyles