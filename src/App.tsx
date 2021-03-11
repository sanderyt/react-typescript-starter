import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import { Home } from "./pages/Home";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
