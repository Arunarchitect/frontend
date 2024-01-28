import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user'
import blogReducer from './features/blog'
import blogdetailReducer from './features/blogdetail'
import blogsReducer from './features/blogs/blogsSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
        blogdetail: blogdetailReducer,
        blogs:blogsReducer,
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
})

