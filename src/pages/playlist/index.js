import React from 'react'

import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (
  <Container>
    <Header>
      <img src='https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg' />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock forever</h1>
        <p>13 musics</p>

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
        <tr>
          <td><img src={PlusIcon} alt='add' /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt='add' /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt='add' /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt='add' /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt='add' /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt='add' /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt='add' /></td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
)

export default Playlist
