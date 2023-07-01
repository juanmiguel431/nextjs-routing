import React from "react";
import { useRouter } from "next/router";

const BlogPostPage: React.FC = (props) => {

  const router = useRouter();

  console.log('JMPC1', router.pathname);
  console.log('JMPC2', router.query);

  return (
    <div>Blog Post Page</div>
  );
}

export default BlogPostPage;
