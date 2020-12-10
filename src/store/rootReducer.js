import { combineReducers } from 'redux'
import categoriesReducer from './categories/reducer'
import locationsReducer from './locations/reducer'
import contextReducer from './context/reducer'

export default combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
  context: contextReducer
})