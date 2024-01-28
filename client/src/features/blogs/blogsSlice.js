// blogsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
    try {
        const response = await getBlogs();
        return response;
    } catch (error) {
        throw error;
    }
});

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
                state.blogs = [];
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                const { status, blogs } = action.payload;

                if (status === "success") {
                    state.isLoading = false;
                    state.isError = false;
                    state.blogs = blogs;
                } else {
                    state.isLoading = false;
                    state.blogs = [];
                    state.isError = true;
                    state.error = "Failed to fetch blogs.";
                }
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.blogs = [];
                state.isError = true;
                state.error = action.error?.message || "An error occurred while fetching blogs.";
            });
    },
});

export default blogsSlice.reducer;
