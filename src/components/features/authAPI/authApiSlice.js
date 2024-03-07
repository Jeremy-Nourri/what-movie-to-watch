import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getAccessToken = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=6d3e4e8c6e2b3c8e8f8c8e8d8e8c8e8c')
    return response.data.request_token
    }


const authApiSlice = createSlice({
  name: "authApi",
  initialState: {
    token: null,
  },
  reducers: {}
});

export const {} = authApiSlice.actions

export default authApiSlice.reducer