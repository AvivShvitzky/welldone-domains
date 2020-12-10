import { combineReducers } from 'redux'
import categoriesReducer from './features/categories'
import locationsReducer from './features/locations'
import contextReducer from './features/context'

export default combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
  context: contextReducer
})