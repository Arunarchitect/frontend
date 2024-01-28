// blogsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./blogAPI";



const initialState = {
    blogi: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchBlog = createAsyncThunk("blogi/fetchBlog", async (id) => {
    const blogi = await getBlog(id);
    return blogi;
});

 const blogiSlice = createSlice({
    name: "blogi",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlog.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.blogi={};
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogi=action.payload;
        })
        .addCase(fetchBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.blogi = {};
            state.isError = true;
            state.error = action.error?.message;
        });
    
    }
 })

 export default blogiSlice.reducer;