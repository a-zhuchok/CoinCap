import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_URL;
const token = import.meta.env.VITE_APP_API_KEY;

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
};
const config = { headers };
const getCurrencyInfo = async id => {
    const response = await axios.get(API_URL + `/${id}`, config)
    return response
};
const fetchGetCurrencyInfo = createAsyncThunk('currencyInfo/fetchGetCurrencyInfo', async id => {
    const { data } = await getCurrencyInfo(id)
    return data
});

const CurrencyInfoSlice = createSlice({
    name: 'currencyInfo',
    initialState: {},
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCurrencyInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.data;
            })
            .addCase(fetchGetCurrencyInfo.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchGetCurrencyInfo.rejected, (state) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    },
});
export { fetchGetCurrencyInfo };
export default CurrencyInfoSlice.reducer;