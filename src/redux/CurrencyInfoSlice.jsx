import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const token = 'cdb49b89-ee17-47a4-91b3-22ac873458d3'
const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  const config = { headers };
  
  const getCurrencyInfo = async id => {
   
      const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`, config)
      
      return response
  };
  const fetchGetCurrencyInfo = createAsyncThunk('currencyInfo/fetchGetCurrencyInfo', async id => {
    const { data } = await getCurrencyInfo(id)
   console.log(data)
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
            })
            
    },
});
export { fetchGetCurrencyInfo }
export default CurrencyInfoSlice.reducer;