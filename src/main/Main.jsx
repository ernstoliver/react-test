import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../components/Login';
import { Contacts } from '../components/Contacts';

const Main = () => {
  return (
    <main className="container">
      <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/contacts' component={Contacts} />
      </Switch> 
    </main>
  )
}

export default Main;