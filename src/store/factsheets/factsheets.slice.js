import { createSlice } from "@reduxjs/toolkit";

export const factsheetsSlice = createSlice({
  name: "factsheets",
  initialState: [],
  reducers: {
    setFactsheets: (state, { payload }) => {
      const data = [...payload];
      return data;
    },
  },
});

export const { actions: factsheetsActions, reducer } = factsheetsSlice;

export const getFactsheetsState = (state) => state.factsheets;
