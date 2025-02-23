import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = 'cdb49b89-ee17-47a4-91b3-22ac873458d3'
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
  const response = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=h1&start=${start}&end=${end}`, config)
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
      })
  },
});
export { fetchGetCurrencyHistory }
export default CurrencyHistorySlice.reducer;