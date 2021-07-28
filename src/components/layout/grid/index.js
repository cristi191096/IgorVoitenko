import React from "react";
  import {
      Container,
      Row,
      Column,
      Break
  } from "./styles/grid";
  import { ThemeProvider } from "styled-components";
  import { DefaultTheme } from "../../../themes";

  export default function Grid({theme=DefaultTheme, children, ...restProps}) {
    return (
        <ThemeProvider theme={theme}>
        <Container {...restProps}>
            {children}
        </Container>
        </ThemeProvider>
    )
}

Grid.Row = function GridRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>;
}

Grid.Column = function GridColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>;
}


Grid.Break = function GridBreak({children, ...restProps}) {
    return <Break {...restProps}>{children}</Break>;
}