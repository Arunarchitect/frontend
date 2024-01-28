import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user'
import blogReducer from './features/blog'
import blogdetailReducer from './features/blogdetail'
import blogsReducer from './features/blogs/blogsSlice';
import blogiReducer from './features/singleblog/blogSlice';
import filterReducer from './features/filter/filterSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
        blogdetail: blogdetailReducer,
        blogs:blogsReducer,
        blogi: blogiReducer,
        filter: filterReducer,
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
})

