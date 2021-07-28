import React, {useState} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  RouterLink,
  RouterLinkA,
} from "./styles/link";
import {ThemeProvider} from "styled-components"
import { DefaultTheme } from "../../../themes";

export default function Button({theme=DefaultTheme, href="", children, ...restProps }) {
    return(
        <ThemeProvider theme={theme}>
          {href === "" ? <RouterLink {...restProps}>{children}</RouterLink> : <RouterLinkA href={href} {...restProps}>{children}</RouterLinkA>}
          </ThemeProvider>
    );
  };
  