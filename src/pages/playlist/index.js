import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Loading from '../../components/Loading'

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'

import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

class Playlist extends Component {
  
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string,
        }))
      }),
      loading: PropTypes.bool
    }).isRequired
  }

  componentDidMount() {
    this.loadPlaylistDetails()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails()
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params

    this.props.getPlaylistDetailsRequest(id)
  }

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data

    return(
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            { !!playlist.songs && <p>{playlist.songs.length} musics</p>}

            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt='duration' />
            </th>
          </thead>

          <tbody>
            { !playlist.songs ? (
              <tr>
                <td colSpan={5}>No musics availables</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td><img src={PlusIcon} alt='add' /></td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    )
  }

  render() {
    const { playlistDetails } = this.props

    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ): (
      this.renderDetails()
    )
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails
})

export default connect(mapStateToProps, PlaylistDetailsActions)(Playlist)
