import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import App from './app';
import {GlobalStyles} from "./global-styles"
import {ThemeProvider} from "styled-components"
import {DefaultTheme} from "./themes"


ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={DefaultTheme}>
    <GlobalStyles/>
    <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

