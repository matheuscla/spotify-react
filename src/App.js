import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'
import Routes from './routes'

import { Wrapper, Container, Content } from './styles/components'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
