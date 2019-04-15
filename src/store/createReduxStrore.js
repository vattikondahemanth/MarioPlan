import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

const initialState = {}

export default () => {
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware(...middleware) // to add other middleware
  )
}