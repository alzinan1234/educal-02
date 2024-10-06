import BlogBanner from "@/components/Blog/BlogBanner";
import BlogData from "@/components/Blog/BlogData";
import Next from "@/components/Blog/Next";
import React from "react";

const Blog = () => {
  return (
    <div>
      <BlogBanner />
      <BlogData />
      <Next />
    </div>
  );
};

export default Blog;
