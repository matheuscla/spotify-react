import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Creators as PlaylistActions } from '../../store/ducks/playlists'

import { Container, Nav, NewPlaylist } from './styles'

import addPlaylistIcon from '../../assets/images/add_playlist.svg'

class SideBar extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      }))
    }).isRequired
  }

  componentDidMount() {
    this.props.getPlaylistRequest()
  }

  render() {
    const { playlists } = this.props

    return(
      <Container>
        <div>
          <Nav>
            <li>
              <Link to='/'>Browse</Link>
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
            { playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}

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

const mapStateToProps = state => ({
  playlists: state.playlists
})

export default connect(mapStateToProps, PlaylistActions)(SideBar)
