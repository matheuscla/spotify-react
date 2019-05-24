import React, { Fragment } from 'react'
import Slider from 'rc-slider'
import Sound from 'react-sound'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  Container,
  Controls,
  Current,
  Progress,
  ProgressSlider,
  Volume,
  Time
 } from './styles'

import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
import PauseIcon from '../../assets/images/pause.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'


const Player = ({ player }) => (
  <Container>
    { !!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
      />
    )}
    <Current>
      { !!player.currentSong && (
        <Fragment>
          <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}

    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt='Shuffle' />
        </button>
        <button>
          <img src={BackwardIcon} alt='Backward' />
        </button>
        <button>
          <img src={PlayIcon} alt='Play' />
        </button>
        <button>
          <img src={ForwardIcon} alt='Forward' />
        </button>
        <button>
          <img src={RepeatIcon} alt='Repeat' />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760'}}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:29</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt='volume' />
      <Slider
        railStyles={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
)

Player.propTypes = ({
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
    status: PropTypes.string
  }).isRequired
})

const mapStateToProps = state => ({
  player: state.player
})

export default connect(mapStateToProps)(Player)
