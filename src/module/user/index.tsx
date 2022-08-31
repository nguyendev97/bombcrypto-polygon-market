import React from "react";
import { useNavigate } from "react-router-dom";

const UserIndexPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <span>This is page user</span>
        <button onClick={() => navigate("/")}>Click me</button>
      </div>
    </>
  );
};

export default UserIndexPage;
