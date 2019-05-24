import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creators as PlaylistActions } from '../../store/ducks/playlists'

import { Container, Nav, NewPlaylist } from './styles'

import addPlaylistIcon from '../../assets/images/add_playlist.svg'

class SideBar extends Component {
  render() {
    return(
      <Container>
        <div>
          <Nav>
            <li>
              <a href=''>Browse</a>
            </li>
            <li>
              <a href=''>Radio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>YOUR LIBRARY</span>
            </li>
            <li>
              <a href=''>Made for you</a>
            </li>
            <li>
              <a href=''>Recently Played</a>
            </li>
            <li>
              <a href=''>Musics</a>
            </li>
            <li>
              <a href=''>Albums</a>
            </li>
            <li>
              <a href=''>Artists</a>
            </li>
            <li>
              <a href=''>Stations</a>
            </li>
            <li>
              <a href=''>Local Files</a>
            </li>
            <li>
              <a href=''>Videos</a>
            </li>
            <li>
              <a href=''>Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            <li>
              <a href=''>Best of Rock</a>
            </li>
          </Nav>
        </div>
        <NewPlaylist>
          <img src={addPlaylistIcon} alt='Add playlist' />
          New Playlist
        </NewPlaylist>
      </Container>

    )
  }
}

export default connect(null, PlaylistActions)(SideBar)
