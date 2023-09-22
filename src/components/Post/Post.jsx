import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="p-4 m-12 rounded-lg border-8 border-sky-500">
      <h1>ID: {id}</h1>
      <p>Title : {title}</p>
      <Link to={`/post/${id}`}>
        <button className=" bg-amber-200">Click</button>
      </Link>
    </div>
  );
};

export default Post;
