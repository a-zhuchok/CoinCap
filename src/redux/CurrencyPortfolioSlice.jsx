import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencyPortfolio: [],
};

const AddCurrencySlice = createSlice({
  name: 'currencyPortfolio',
  initialState,
  reducers: {
    addCurrency: (state, action) => {
      const { name, count, price } = action.payload;
      const existingCurrency = state.currencyPortfolio.find(currency => currency.name === name);
      if (existingCurrency) {
        existingCurrency.count += count; 
        existingCurrency.total = existingCurrency.count * price; 
      } else {
        state.currencyPortfolio.push(action.payload); 
      }
    },
    deleteCurrency: (state, action) => {
      state.currencyPortfolio = state.currencyPortfolio.filter((currency) => currency.name !== action.payload)
    },
  },
});

export const { addCurrency, deleteCurrency } = AddCurrencySlice.actions;
export default AddCurrencySlice.reducer;