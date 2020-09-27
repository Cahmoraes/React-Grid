import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box; 
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    font: 400 2rem monospace;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 60%;
    }
  }
`


export default GlobalStyles