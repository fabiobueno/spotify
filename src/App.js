import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";

function App() {
  return (
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
  );
}

export default App;
