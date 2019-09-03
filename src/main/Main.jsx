import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../components/Login';
import ContactTable from '../components/ContactTable';

const Main = () => {
  return (
    <main className="container">
      <Switch>
        <Route exact path='/' component={Login} />
        {
          localStorage.getItem('id') ?
            <Route exact path='/contacts' component={ContactTable} />
            : <Redirect to='/' />
        }
      </Switch>
    </main>
  )
}

export default Main;