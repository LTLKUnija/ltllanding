import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as newsReducer } from "./news/news.slice";
import { reducer as annualReportsReducer } from "./annualReports/AnnualReports.slice";

const reducers = combineReducers({
  news: newsReducer,
  annualReports: annualReportsReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
