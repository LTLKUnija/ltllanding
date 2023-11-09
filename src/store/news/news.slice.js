import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {
    setNews: (state, { payload }) => {
      const data = [...payload];
      return data;
    },
  },
});

export const { actions: newsActions, reducer } = newsSlice;

export const getNewsState = (state) => state.news;
