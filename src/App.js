import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './config/reactotron'
import GlobalStyle from './styles/global'
import store from './store'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'
import ErrorBox from './components/ErrorBox'
import Routes from './routes'

import { Wrapper, Container, Content } from './styles/components'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <GlobalStyle />
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <ErrorBox />
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
