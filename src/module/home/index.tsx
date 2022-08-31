import React from "react";
import { useNavigate } from "react-router-dom";
import "lazysizes";

const HomePageIndex = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>
        <span>this is home page</span>
        <button onClick={() => navigate("/user")}>Click me</button>
      </div>
    </React.Fragment>
  );
};

export default HomePageIndex;
