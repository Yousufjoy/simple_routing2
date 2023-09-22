import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData();

  const { name, email, phone, website } = user;
  return (
    <div>
      <h2>Details About User</h2>
      <p>
        Details about user: <span className="text-5xl">{name}</span>{" "}
      </p>
    </div>
  );
};

export default UserDetail;
