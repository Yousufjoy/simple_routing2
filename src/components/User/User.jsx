import React from "react";

export const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="p-4 m-12 rounded-lg border-8 border-sky-500">
      <h2>{name}</h2>
      <p>Email : {email}</p>
      <p>phone : {phone}</p>
    </div>
  );
};
