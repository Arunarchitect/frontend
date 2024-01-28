import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user'
import blogReducer from './features/blog'
import blogdetailReducer from './features/blogdetail'
import blogsReducer from './features/blogs/blogsSlice';
import blogiReducer from './features/singleblog/blogSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
        blogdetail: blogdetailReducer,
        blogs:blogsReducer,
        blogi: blogiReducer,
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
})

