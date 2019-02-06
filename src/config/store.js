import { createStore, combineReducers, applyMiddleware } from 'redux'
import app from '../common/reducers/app'
import logger from 'redux-logger'

const reducers = combineReducers({
  app: app,
})

const middlewares = applyMiddleware(
  logger,
)

export default createStore(reducers, middlewares)