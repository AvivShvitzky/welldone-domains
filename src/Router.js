import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom';

import Categories from './pages/categories/Categories'
import NewCategory from './pages/newCategory/NewCategory'
import ViewCategory from './pages/viewCategory/ViewCategory'
import Navbar from './components/navbar/Navbar'


const Router = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/categories" />
        </Route>
        <Route exact default path="/categories"
          component={Categories}
        />
        <Route exact default path="/new-category"
          component={NewCategory}
        />
        <Route path="/category/:name"
          component={ViewCategory}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router

