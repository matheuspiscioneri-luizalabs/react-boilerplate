import { combineReducers } from 'redux'

import ListReducer from './listReducer'
import DetailsReducer from './detailsReducer'

export default combineReducers({
  ListReducer,
  DetailsReducer,
})