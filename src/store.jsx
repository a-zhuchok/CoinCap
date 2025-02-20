import { configureStore } from '@reduxjs/toolkit';
import CurrencyListSlice from './redux/CurrencyListSlice';
import AddCurrencySlice from './redux/AddCurrencySlice';
import CurrencyInfoSlice from './redux/CurrencyInfoSlice';

const store = configureStore({
  reducer: {
    currencyPortfolio: AddCurrencySlice,
    currencyList: CurrencyListSlice,
    currencyInfo: CurrencyInfoSlice,
  }
})

export default store;