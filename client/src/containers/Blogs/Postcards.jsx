import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs } from '../../features/blogs/blogsSlice';

const Postcards = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector(state => state.blogs);
  const { blogs, isLoading, isError, error } = blogsState;

  

  // dispatch action to get blogs
  useEffect(()=>{
    dispatch(fetchBlogs())
  },[dispatch])

  console.log(blogs)
  
  return (
    <div className="w-full lg:w-2/3">
          <a className="block rounded w-full lg:flex mb-10"
            href="#"
          >
            <div 
              className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")' }} 
              title="deit is very important"
            ></div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
                </div>
                <p className="text-gray-700 text-base">
                  Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                  <p className="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </a>


        </div>
  )
}

export default Postcards