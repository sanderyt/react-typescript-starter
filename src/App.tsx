import React, { FC } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
