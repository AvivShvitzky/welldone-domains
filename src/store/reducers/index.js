import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import locationsReducer from './locationsReducer'

export default combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer
})