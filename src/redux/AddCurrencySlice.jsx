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
      
      console.log('ssssss',state.currencyPortfolio )
    },
  },
});

export const { addCurrency } = AddCurrencySlice.actions;
export default AddCurrencySlice.reducer;