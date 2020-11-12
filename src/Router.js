import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom';

import Categories from './pages/categoriesPages/categories/Categories'
import NewCategory from './pages/categoriesPages/newCategory/NewCategory'
import ViewCategory from './pages/categoriesPages/viewCategory/ViewCategory'
import EditCategory from './pages/categoriesPages/editCategory/EditCategory'

import Locations from './pages/locationsPages/locations/Locations'
import NewLocation from './pages/locationsPages/newLocation/NewLocation'
import ViewLocation from './pages/locationsPages/viewLocation/ViewLocation'
import EditLocation from './pages/locationsPages/editLocation/EditLocation'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import { useRecoilState } from "recoil";
import { currentEntity as currentEntityAtom } from './store/atoms'

const Router = () => {
  const [currentEntity, setCurrentEntity] = useRecoilState(currentEntityAtom);
  console.log(currentEntity);
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
        <Route exact path="/new-category" render={(props) => (
          currentEntity ? (
            <NewCategory {...props} />
          ) : (
            <Redirect to="/categories"/>
          )
        )}/>
        {/* <Route exact default path="/new-category"
          component={NewCategory}
        /> */}
        <Route path="/category/:name"
          component={ViewCategory}
        />
        <Route path="/edit-category/:name"
          component={EditCategory}
        />

        <Route exact default path="/locations"
          component={Locations}
        />
        <Route exact default path="/new-location"
          component={NewLocation}
        />
        <Route path="/location/:name"
          component={ViewLocation}
        />
        <Route path="/edit-location/:name"
          component={EditLocation}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Router

