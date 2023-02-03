import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PageContextProvider } from "./context/pageContext";
import { DataContextProvider } from "./context/dataContext";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/elements/theme.elements";
import FontStyle from "./components/elements/fontStyle.elements";
import GlobalStyle from "./components/elements/globalStyle.elements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PageContextProvider>
    <DataContextProvider>
      <ThemeProvider theme={Theme}>
        <FontStyle />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </DataContextProvider>
  </PageContextProvider>
);
