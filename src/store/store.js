import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as newsReducer } from "./news/news.slice";
import { reducer as annualReportsReducer } from "./annualReports/annualReports.slice";
import { reducer as quarterReportsReducer } from "./quarterReports/quarterReports.slice";
import { reducer as priceListReducer } from "./priceList/priceList.slice";

const reducers = combineReducers({
  news: newsReducer,
  annualReports: annualReportsReducer,
  quarterReports: quarterReportsReducer,
  priceList: priceListReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
