/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
// import * as theme from "./src/themes/index.js"

const theme = {
  colours: {
    primary1: "#EC0C41", // pink
    primary2: "#0CECB7", // teal
    primary3: "#1B1B1B", //main black used for text & header
    secondary1: "#000", // secondary black used for below the header
    secondary2: "#fff", // white - used as text and bg colour
    secondary3: "#898787", // grey used for subheadings
    primary2Fade: "#EEFDFA",
    projectGoal: "#FBF8F8",
  },

  fonts: {
    primary: "Open Sans",
  },

  fontSizes: ["16px", "18px", "22px", "25px", "37px", "42px"],
  spacing: ["1rem", "1.5rem", "2rem", "2.5rem", "3rem", "3.5rem", "4rem"],
  maxWidth: {
    desktop: "1000px",
    tablet: "700px",
    mobile: "500px",
  },

  tabletBP: "1050px",
  mobileBP: "836px",
}

// import ThemeProvider from "./src/contexts/theme-context"
export const wrapRootElement = ({ element }) => {
  return (
    <StyledThemeProvider theme={{ ...theme }}>{element}</StyledThemeProvider>
  )
}
