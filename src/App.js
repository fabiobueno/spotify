import React from "react";

import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";

import "./config/reactotron";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Wrapper>
          <Container>
            <Sidebar></Sidebar>
            <Content>
              <Header></Header>
              <Routes></Routes>
            </Content>
          </Container>
          <Player></Player>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
