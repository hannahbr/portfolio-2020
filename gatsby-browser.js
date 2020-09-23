/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import * as theme from "./src/themes/index.js"

// import ThemeProvider from "./src/contexts/theme-context"
export const wrapRootElement = ({ element }) => (
  <StyledThemeProvider theme={{ ...theme }}>{element}</StyledThemeProvider>
)
