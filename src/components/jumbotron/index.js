import React from "react";
import {
  Container,
  Inner,
  Item,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";
import {ThemeProvider} from "styled-components"
import { DefaultTheme } from "../../themes";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item >
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ theme=DefaultTheme, children, ...restProps }) {
  return (
  <ThemeProvider theme={theme}>
  <Container {...restProps}>{children}</Container>
  </ThemeProvider>);
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
