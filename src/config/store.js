import { createStore, combineReducers } from 'redux'
import app from '../common/reducers/app'

const reducers = combineReducers({
  app: app,
})

export default createStore(reducers)