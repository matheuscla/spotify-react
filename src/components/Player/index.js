import React from 'react'

import { Container, Current, Volume } from './styles'

import VolumeIcon from '../../assets/images/volume.svg'

const Player = () => (
  <Container>
    <Current>
      <img src='https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg' alt="" />
      <div>
        <span>Times like this</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Volume>
      <img src={VolumeIcon} alt='volume' />
    </Volume>
  </Container>
)

export default Player
