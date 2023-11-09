import { createSlice } from "@reduxjs/toolkit";

export const quarterReportsSlice = createSlice({
  name: "quarterReports",
  initialState: {
    lt: [],
    en: [],
  },
  reducers: {
    setQuarterReportsLT: (state, { payload }) => {
      return { ...state, lt: payload };
    },
    setQuarterReportsEN: (state, { payload }) => {
      return { ...state, en: payload };
    },
  },
});

export const { actions: quarterReportsActions, reducer } = quarterReportsSlice;

export const getQuarterReportsState = (state) => state.quarterReports;
