import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from 'Configs/axiosInstance';
import toast from "react-hot-toast";

const initialState = {
    bookList: []
}

export const getAllBooks = createAsyncThunk("course/getAllBooks", async ()=> {
    try {
        const response = axiosInstance.get("books");
        toast.promise(response,{
            loading: "loading books data...",
            success: "Successfully loaded all the books",
            error: "Something went wrong"
        })
        return await response;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong,cannot download books !");
    }
})




const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.fulfilled, (state,acion) => {
            console.log(acion);
            if(acion?.payload?.data?.data) {
                state.bookList = acion?.payload?.data?.data;
            }
        })
    }
})



export default bookSlice.reducer;