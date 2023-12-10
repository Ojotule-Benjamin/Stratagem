import React from "react";
import { useLocation } from "react-router-dom";

const BlogPost = () => {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <div>
      <h1>blogpost page</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default BlogPost;
