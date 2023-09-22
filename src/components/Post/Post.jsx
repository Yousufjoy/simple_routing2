import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const naviGate = useNavigate();
  const { id, title } = post;

  const handleNavigate = () => {
    naviGate(`/post/${id}`);
  };
  return (
    <div className="p-4 m-12 rounded-lg border-8 border-sky-500">
      <h1>ID: {id}</h1>
      <p>Title : {title}</p>
      <Link to={`/post/${id}`}>
        <button className=" bg-amber-200">Click</button>
      </Link>
      <br />
      <button onClick={handleNavigate} className=" bg-red-400">
        Show Details
      </button>
    </div>
  );
};

export default Post;
