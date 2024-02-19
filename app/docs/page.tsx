'use client'

import React, { useEffect } from "react";
import { useAccount } from "wagmi";

const Blog = () => {
  const account = useAccount();

  useEffect(() => {
    console.log(account);
  }, [account]);

  return <div>Blog Page</div>;
};

export default Blog;