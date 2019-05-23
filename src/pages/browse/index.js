import React from 'react'

import { Container, List, Playlist, Title } from './styles'

const Browse = () => (
  <Container>
    <Title>Browse</Title>

    <List>
      <Playlist to='/playlists/1'>
        <img
          src='https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg'
        />
        <strong>Rock</strong>
        <p>Relax while you program listening the best of rock!</p>
      </Playlist>

      <Playlist to='/playlists/1'>
        <img
          src='https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg'
        />
        <strong>Rock</strong>
        <p>Relax while you program listening the best of rock!</p>
      </Playlist>

      <Playlist to='/playlists/1'>
        <img
          src='https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg'
        />
      <strong>Rock</strong>
      <p>Relax while you program listening the best of rock!</p>
      </Playlist>

      <Playlist to='/playlists/1'>
        <img
          src='https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg'
        />
      <strong>Rock</strong>
      <p>Relax while you program listening the best of rock!</p>
      </Playlist>
    </List>
  </Container>
)

export default Browse
