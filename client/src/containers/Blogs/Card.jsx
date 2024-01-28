import React from "react";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  // console.log(blog)
  const {
    id,
    title,
    image,
    category,
    author,
    authorPic,
    published_date,
    reading_time,
    content,
    tags,
  } = blog;
  return (
    <Link
      to={`/blogs/${id}`}
      className="block rounded w-full lg:flex mb-10"
      href="#"
    >
      <div
        className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
        style={{ backgroundImage: `url(${image})` }}
        title="deit is very important"
      ></div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            {title}
          </div>

          <p className="text-gray-700 text-base">{content}</p>
          <p className="text-gray-700 text-sm py-1 italic">
            Tags:{" "}
            {tags && Array.isArray(tags) ? (
              tags.map((tag, ind) => (
                <span key={ind} className="mx-1 underline">
                  {tag.title}
                </span>
              ))
            ) : (
              <span>No tags available</span>
            )}
          </p>
        </div>
        <div className="flex mt-3">
          <img
            src={authorPic}
            className="h-10 w-10 rounded-full mr-2 object-cover"
            alt="Author"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm capitalize">
              {author}
            </p>
            <p className="text-gray-600 text-xs"> {published_date} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
