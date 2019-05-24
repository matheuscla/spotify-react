import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Browse from '../pages/browse'
import Playlist from '../pages/playlist'

const Routes = () => (
  <Switch>
    <Route exact path='/playlists/:id' component={Playlist} />
    <Route path='/' component={Browse} />
  </Switch>
)

export default Routes
