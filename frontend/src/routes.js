import React from 'react'
import { Switch, Route } from 'react-router-dom';

//CUSTOM COMPONENTS
import Feed from './pages/feed/Feed';
import New from './pages/new/New';

function Routes() {
  return (
    //switch permite que seja chamada uma rota para cada URL que o user acessar
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </Switch>

  );
}

export default Routes;