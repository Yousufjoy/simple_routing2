import React from "react";
import { useLoaderData } from "react-router-dom";
import { User } from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>Users length : {users.length}</h2>
      <div className="grid grid-cols-3">
        {users.map((user) => {
          return <User key={user.id} user={user}></User>;
        })}
      </div>
    </div>
  );
};

export default Users;
