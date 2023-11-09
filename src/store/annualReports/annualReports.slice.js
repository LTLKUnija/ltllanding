import { createSlice } from "@reduxjs/toolkit";

export const annualReportsSlice = createSlice({
  name: "annualReports",
  initialState: [],
  reducers: {
    setAnnualReports: (state, { payload }) => {
      const data = [...payload];
      return data;
    },
  },
});

export const { actions, reducer } = annualReportsSlice;

export const getAnnualReportsState = (state) => state.annualReports;
