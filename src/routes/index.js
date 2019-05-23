import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Browse from '../pages/browse'
import Playlist from '../pages/playlist'

const Routes = () => (
  <Switch>
    <Route path='/playlists/:id' component={Playlist} />
    <Route exact path='' component={Browse} />
  </Switch>
)

export default Routes
