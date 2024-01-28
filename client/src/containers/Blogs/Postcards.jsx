import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Card from "./Card";

const Postcards = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((state) => state.blogs);
  const { blogs, isLoading, isError, error } = blogsState;

  const { tags, search } = useSelector((state) => state.filter);
  console.log(tags, search);

  // dispatch action to get blogs
  useEffect(() => {
    dispatch(fetchBlogs({tags, search}));
  }, [dispatch, search,  tags]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  return (
    <div className="w-full lg:w-2/3">
      {!isError && !isLoading && paginatedBlogs?.length > 0 ? (
        <div>
          {paginatedBlogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
          {/* pagination */}
          <div className="space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 bg-red-500 text-white rounded cursor-pointer"
            >
              Previous
            </button>
            <span>{currentPage}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-2 bg-indigo-500 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>Blogs are over</div>
      )}
    </div>
  );
};

export default Postcards;
