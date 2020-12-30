import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './user';
import counter from './counter'

const reducer = combineReducers({
  // here we will be adding reducers
  user,
  counter,
})
const store = configureStore({
  reducer,
})
export default store;