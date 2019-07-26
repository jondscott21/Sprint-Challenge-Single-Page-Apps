import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';
import { Search } from 'semantic-ui-react';
import SearchForm from './SearchForm';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/episodes' component={EpisodeList} />
      <Route path='/search' component={SearchForm} />
      {/* <Route path='/episodes/:id/character' render={props =>  <CharacterList {...props} />} /> */}
      <Route component={WelcomePage} />
    </Switch>
  </div>

}
