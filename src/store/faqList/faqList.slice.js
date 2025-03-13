import { createSlice } from "@reduxjs/toolkit";

export const faqListSlice = createSlice({
  name: "faqList",
  initialState: {
    CurrentAccFAQ: {},
    DepositFAQ: {},
    LoanForBusiness: {},
    LoanForPrivates: {},
    ac2: {},
    InternetBank: {},
  },
  reducers: {
    setCurrentAccFAQ: (state, { payload }) => {
      return { ...state, CurrentAccFAQ: payload };
    },
    setDepositFAQ: (state, { payload }) => {
      return { ...state, DepositFAQ: payload };
    },
    setLoanForBusiness: (state, { payload }) => {
      return { ...state, LoanForBusiness: payload };
    },
    setLoanForPrivates: (state, { payload }) => {
      return { ...state, LoanForPrivates: payload };
    },
    setac2: (state, { payload }) => {
      return { ...state, ac2: payload };
    },
    setInternetBank: (state, { payload }) => {
      return { ...state, InternetBank: payload };
    },
  },
});

export const { actions: faqListActions, reducer } = faqListSlice;
export const getFaqListState = (state) => state.faqList;
export const getCurrentAccFAQ = (state) => state.faqList.CurrentAccFAQ;
export const getDepositFAQ = (state) => state.faqList.DepositFAQ;
export const getLoanForBusiness = (state) => state.faqList.LoanForBusiness;
export const getLoanForPrivatesState = (state) => state.faqList.LoanForPrivates;
export const getac2 = (state) => state.faqList.ac2;
export const getInternetBank = (state) => state.faqList.InternetBank;
