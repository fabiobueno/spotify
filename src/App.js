import React, {Fragment} from 'react';
import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

import {Wrapper, Container} from './styles/components';

function App() {
  return (
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Wrapper>
          <Container>
            <Sidebar></Sidebar>
          </Container>
          <Player></Player>
        </Wrapper>
      </Fragment>
  );
}

export default App;
