import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currencyPortfolio: [],
}

const AddCurrencySlice = createSlice({
  name: 'currencyPortfolio',
  initialState,
  reducers: {
    addCurrency: (state, action) => {
      state.currencyPortfolio = [...state.currencyPortfolio, action.payload];
    },
    deleteCurrency: (state, action) => {
      
      state.currencyPortfolio = state.currencyPortfolio.filter((currency) => currency.name !== action.payload)
      console.log(state.currencyPortfolio )
      
    },
  },
});

export const { addCurrency, deleteCurrency } = AddCurrencySlice.actions;
export default AddCurrencySlice.reducer;