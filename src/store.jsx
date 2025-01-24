import { configureStore } from '@reduxjs/toolkit';
import CurrencyListSlice from './redux/CurrencyListSlice';

const store = configureStore({
  reducer: {
    currencyList: CurrencyListSlice,
  }
})

export default store;