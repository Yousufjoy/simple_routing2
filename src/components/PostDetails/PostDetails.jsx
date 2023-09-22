import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;

  return (
    <div>
      <h3>Post details About</h3>
      <h1>id: {id}</h1>
      <p>Title : {title}</p>
    </div>
  );
};

export default PostDetails;
