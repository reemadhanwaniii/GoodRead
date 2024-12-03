import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from 'Configs/axiosInstance';
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || ''
}

export const signup = createAsyncThunk("auth/signup", async (data)=> {
    try {
       const response = axiosInstance.post("signup",data);
       toast.promise(response,{
        loading: 'Submitting Form ..',
        success: 'Successfully Signed up',
        error: 'Something went wrong'
       });
       return await response
    } catch (error) {
        console.log(error);
        toast.error("Cannot signup something went wrong");
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    }
})

export default authSlice.reducer;