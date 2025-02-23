import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = 'cdb49b89-ee17-47a4-91b3-22ac873458d3'
const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
};
const config = { headers };
const getCurrencyList = async () => {
    const response = await axios.get('https://api.coincap.io/v2/assets', config)
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
            })
    },
});
export { fetchGetCurrencyList }
export default CurrencyListSlice.reducer;