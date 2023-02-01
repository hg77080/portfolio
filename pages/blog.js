import React, { useState } from "react";
import Loading from "../components/Loading";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div>This is Blog Page</div>
      <Loading/>
    </>
  );
};

export default Blog;
