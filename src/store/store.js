import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as newsReducer } from './news/news.slice'

const reducers = combineReducers({
  news: newsReducer,
})

export const store = configureStore({
  reducer: reducers,
  devTools: true
})
