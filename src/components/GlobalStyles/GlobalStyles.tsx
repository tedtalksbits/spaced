import { COLORS } from "../../theme/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
  --surface-1: #e5e5e5;
  --surface-2: hsl(218, 36%, 96%);
  --surface-3: #fcfcfc;
  --surface-4: #fff;
  --text-1: hsl(240, 37%, 12%);
  --text-2: #808893;
  --text-3: #e6ecf3;
  --brand-1: hsl(256, 83%, 55%);
  --brand-2: #5f2eeb21;
  --secondary: #2eebd2;
}

  /* @media (prefers-color-scheme: dark) {
    :root {
      --primary-color: hsl(${COLORS.primaryHue} 100% 50%);
      --background: hsl(${COLORS.backgroundHue} 0% 8%);
      --foreground: hsl(${COLORS.backgroundHue} 0% 0%);
      --text-color: hsl(${COLORS.backgroundHue} 0% 100%);
      --background-active: hsl(${COLORS.backgroundHue} 10% 10%);
    }
  } */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;
    background-color: var(--surface-2);
    font-family: "Poppins", sans-serif;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    color: var(--text-1);
    accent-color: var(--brand-1);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  `;
