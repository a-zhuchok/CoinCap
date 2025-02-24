import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_URL;
const token = import.meta.env.VITE_APP_API_KEY;

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
};
const config = { headers };
const getCurrencyList = async () => {
    const response = await axios.get(API_URL, config)
    return response
};
const fetchGetCurrencyList = createAsyncThunk('currencyList/fetchGetCurrencyList', async () => {
    const { data } = await getCurrencyList()
    return data
});

const CurrencyListSlice = createSlice({
    name: 'currencyList',
    initialState: {},
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCurrencyList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.data;
            })
            .addCase(fetchGetCurrencyList.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchGetCurrencyList.rejected, (state) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
});
export { fetchGetCurrencyList };
export default CurrencyListSlice.reducer;