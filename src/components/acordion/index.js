import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import {
  Container,
  Inner,
  Title,
  Header,
  Item,
  Body,
  Frame,
} from "./styles/accordion";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../../themes";

const ToggleContext = createContext();
export default function Accordion({
  theme = DefaultTheme,
  children,
  ...restProps
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    </ThemeProvider>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
      <img
        className={toggleShow ? "open" : "closed"}
        src="/images/icons/close-slim.png"
      />
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const bodyRef = useRef(null);
  const { toggleShow } = useContext(ToggleContext);

  useEffect(() => {
    if (toggleShow) {
      bodyRef.current.style.maxHeight =
        bodyRef.current.children[0].getBoundingClientRect().height + "px";
    } else {
      bodyRef.current.style.maxHeight = null;
    }
  }, [toggleShow]);

  return (
    <Body
      ref={bodyRef}
      className={toggleShow ? "open" : "closed"}
      {...restProps}
    >
      <span>{children}</span>
    </Body>
  );
};
