import React, {useState} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  ButtonLink,
  ButtonLinkA,
} from "./styles/button";
import {ThemeProvider} from "styled-components"
import { DefaultTheme } from "../../../themes";

export default function Button({theme=DefaultTheme, href="", children, ...restProps }) {
    return(
        <ThemeProvider theme={theme}>
          {href === "" ? <ButtonLink {...restProps}>{children}</ButtonLink> : <ButtonLinkA href={href} {...restProps}>{children}</ButtonLinkA>}
          </ThemeProvider>
    );
  };
  