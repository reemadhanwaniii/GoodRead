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


export const signin = createAsyncThunk("auth/signin", async (data)=> {
    try {
       const response = axiosInstance.post("signin",data);
       toast.promise(response,{
        loading: 'Submitting Form ..',
        success: 'Successfully Signed in',
        error: 'Something went wrong'
       });
       return await response
    } catch (error) {
        console.log(error);
        if(error?.response?.data?.err) {
            toast.error(error?.response?.data?.data?.err);
        }else{
            toast.error("Cannot signin something went wrong");
        }  
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state,acion) => {
            //console.log(action);
            if(acion?.payload?.data) {
                const receivedData = acion?.payload?.data?.data;
                state.isLoggedIn = (acion?.payload?.data?.data !== undefined);
                state.username = acion?.payload?.data?.data.username;
                state.token = acion?.payload?.data?.data.token;
                localStorage.setItem("isLoggedIn",acion?.payload?.data?.data !== undefined);
                localStorage.setItem("username",acion?.payload?.data?.data.username);
                localStorage.setItem("token",acion?.payload?.data?.data.token);
            }
        })
    }
})

export default authSlice.reducer;