import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        <Container>
          <Sidebar></Sidebar>
          <Content>
            <Header></Header>
          </Content>
        </Container>
        <Player></Player>
      </Wrapper>
    </Fragment>
  );
}

export default App;
