import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder='Search' />
    </Search>

    <User>
      <img src='https://avatars3.githubusercontent.com/u/12254845?v=4' alt='avatar' />
      Matheus César
    </User>
  </Container>
)

export default Header
