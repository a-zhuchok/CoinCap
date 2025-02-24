import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_URL;
const token = import.meta.env.VITE_APP_API_KEY;

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json'
};
const config = { headers };
const getTimestamps = () => {
  const end = Date.now()
  const start = end - 24 * 60 * 60 * 1000
  return { start, end }
};
const getCurrencyHistory = async id => {
  const { start, end } = getTimestamps();
  const response = await axios.get(API_URL + `/${id}/history?interval=h1&start=${start}&end=${end}`, config)
  return response
};
const fetchGetCurrencyHistory = createAsyncThunk('currencyHistory/fetchGetCurrencyHistory', async id => {
  const { data } = await getCurrencyHistory(id)
  return data
});

const CurrencyHistorySlice = createSlice({
  name: 'currencyHistory',
  initialState: {},
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCurrencyHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(fetchGetCurrencyHistory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchGetCurrencyHistory.rejected, (state) => {
        state.status = 'failed';
        state.error = action.payload;
    })
  },
});
export { fetchGetCurrencyHistory };
export default CurrencyHistorySlice.reducer;