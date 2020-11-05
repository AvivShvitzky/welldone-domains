import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom';

import Categories from './pages/categories/Categories'

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/categories" />
        </Route>
        <Route exact default path="/categories"
          component={Categories}
        />
        {/* <Route path="/teams/:id"
          component={Team}
        /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router

