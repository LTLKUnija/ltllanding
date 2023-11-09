import { createSlice } from "@reduxjs/toolkit";

export const priceListSlice = createSlice({
  name: "priceList",
  initialState: [],
  reducers: {
    setPriceList: (state, { payload }) => {
      const data = [...payload];
      return data;
    },
  },
});

export const { actions: priceListActions, reducer } = priceListSlice;

export const getPriceListState = (state) => state.priceList;
