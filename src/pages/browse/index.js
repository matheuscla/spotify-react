import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Creators as PlaylistActions } from '../../store/ducks/playlists'

import { Container, List, Playlist, Title } from './styles'

class Browse extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
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
        <Title>Browse</Title>

        <List>
          {playlists.data.map(playlist => (
            <Playlist to={`/playlist/${playlist.id}`} key={playlist.id}>
              <img
                src={playlist.thumbnail}
                alt={playlist.title}
              />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}

        </List>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
})

export default connect(mapStateToProps, PlaylistActions)(Browse)
