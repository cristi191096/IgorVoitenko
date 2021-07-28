import React, {useState} from "react";
import {
    NormalText,
    Small,
    Large,
    Title,
    SubTitle
  } from "./styles/text";
import {ThemeProvider} from "styled-components"
import { DefaultTheme } from "../../../themes";

export default function Text({theme=DefaultTheme, children, ...restProps }) {
    return(
        <ThemeProvider theme={theme}>
    <NormalText {...restProps}>{children}</NormalText>
    </ThemeProvider>
    );
};

Text.Title = function TextTitle({theme=DefaultTheme, children, ...restProps }) {
    return(
        <ThemeProvider theme={theme}>
    <Title {...restProps}>{children}</Title>
    </ThemeProvider>
    );
  };

  Text.SubTitle = function TextSubTitle({theme=DefaultTheme, children, ...restProps }) {
    return(
        <ThemeProvider theme={theme}>
    <SubTitle {...restProps}>{children}</SubTitle>
    </ThemeProvider>
    );
  };

  Text.Small = function TextSmall({theme=DefaultTheme, children, ...restProps }) {
    return(
        <ThemeProvider theme={theme}>
    <Small {...restProps}>{children}</Small>
    </ThemeProvider>
    );
  };

  Text.Large = function TextLarge({theme=DefaultTheme, children, ...restProps }) {
    return(
        <ThemeProvider theme={theme}>
    <Large {...restProps}>{children}</Large>
    </ThemeProvider>
    );
  };