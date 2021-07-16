import React from "react";
import {
  Article,
} from "./styles/section";
import {ThemeProvider} from "styled-components"
import { DefaultTheme } from "../../themes";

export default function Section({theme=DefaultTheme, children, ...restProps }) {
  return(
    <ThemeProvider theme={theme}>
    { <Article {...restProps}>{children}</Article> }
     </ThemeProvider>
     );

};