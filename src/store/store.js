import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as newsReducer } from "./news/news.slice";
import { reducer as annualReportsReducer } from "./annualReports/annualReports.slice";
import { reducer as quarterReportsReducer } from "./quarterReports/quarterReports.slice";
import { reducer as priceListReducer } from "./priceList/priceList.slice";
import { reducer as faqListReducer } from "./faqList/faqList.slice";
import { reducer as factsheetsReducer } from "./factsheets/factsheets.slice";

const reducers = combineReducers({
  news: newsReducer,
  annualReports: annualReportsReducer,
  quarterReports: quarterReportsReducer,
  priceList: priceListReducer,
  faqList: faqListReducer,
  factsheets: factsheetsReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
