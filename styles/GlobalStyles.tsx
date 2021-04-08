import { createGlobalStyle } from 'styled-components';

// Max Width is divided into 320 blocks. So it breaks every 320px
// This works for the smaller iPhones so seems like a good idea :D
//
// This should general break up into 300px blocks with 10px spacing
// on each side
//
// Wrapping 10px on the outside might need consideration
//
// Smallest = 320px
// Medium = 640px
// Large = 960px
// FullSize = 1280px
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%; /* Now 10px = 1rem! */
  }
  body {
    font-size: 20px; /* px fallback */
    font-size: 2rem; /* default font-size for document */
    line-height: 1.5; /* a nice line-height */
    font-family: 'Raleway', sans-serif;
    background-color: #ffb700;
    color: #ffffff;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Fredoka One', cursive;;
    letter-spacing: 0.2rem;
    line-height: 1.1;
    margin: 1rem 0;
  }
  pre {
    white-space: pre-wrap;
    line-height: 1.1;
    font-size: 1.6rem;
    background: #011627;
    padding: 1rem;
    color: white;
  }
  code{
    font-family: "Ubuntu Mono", "monospace";
    color: white;
    background: #011627;
    padding: 0.2rem
  }
  h1{
    font-size: 4rem
  }
  h2{
    font-size: 3.5rem
  }
  h3{
    font-size: 3rem
  }
  h4{
    font-size: 2.5rem
  }
  h5{
    font-size: 2rem;
    text-decoration: underline
  }
  h6{
    font-size: 1.6rem
  }
  a{
    color: ${({ theme }): string => theme.colours.text.link.display};
    
    &:hover, &:focus{
      color: ${({ theme }): string => theme.colours.text.link.focus};  
    }
    &.is-active{
      ${({ theme }): string => theme.colours.text.link.active};
      
    }
    &.multiline{
      margin: 0 2.5rem;
      text-align: center;
      position: relative;
      display: inline-block;
      &::before, &::after{
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
      }
      &::before{
        left: -2.5rem
      }
      &::after{
        right: -2.5rem
      }
    }
  }
  p{
    margin: 1.5rem 0;
  }
`;
export default GlobalStyles;
