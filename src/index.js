import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/cl9tac2dm2saa01uf9mgj8lis/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
