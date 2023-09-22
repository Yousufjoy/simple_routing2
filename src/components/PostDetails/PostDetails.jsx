import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const naviGateBack = useNavigate();
  const { id, title, body } = post;

  const handleNavigateBack = () => {
    naviGateBack(-1);
  };
  return (
    <div className="border border-sky-500">
      <h3>Post details About</h3>
      <h1>id: {id}</h1>
      <p>Title : {title}</p>
      <button onClick={handleNavigateBack} className=" bg-amber-200">
        Go back
      </button>
    </div>
  );
};

export default PostDetails;
