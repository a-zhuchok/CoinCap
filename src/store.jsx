import { configureStore } from '@reduxjs/toolkit';
import CurrencyListSlice from './redux/CurrencyListSlice';
import CurrencyPortfolioSlice from './redux/CurrencyPortfolioSlice';
import CurrencyInfoSlice from './redux/CurrencyInfoSlice';
import CurrencyHistorySlice from './redux/CurrencyHistorySlice';

const store = configureStore({
  reducer: {
    currencyPortfolio: CurrencyPortfolioSlice,
    currencyList: CurrencyListSlice,
    currencyInfo: CurrencyInfoSlice,
    currencyHistory: CurrencyHistorySlice,
  }
})

export default store;