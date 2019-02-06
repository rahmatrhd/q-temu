import { createStore, combineReducers, applyMiddleware } from 'redux'
import app from '../common/reducers/app'
import members from '../common/reducers/members'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  app: app,
  members,
})

const middlewares = applyMiddleware(
  thunk,
  logger,
)

export default createStore(reducers, middlewares)