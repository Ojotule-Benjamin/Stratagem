import React, { ReactNode } from "react";

interface BlogProps {
  className?: string;
  children: ReactNode;
}

const Blog: React.FC<BlogProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full flex items-center justify-center flex-wrap basis-1 gap-14 md:gap-7 ${className}`}
    >
      {children}
    </div>
  );
};

export default Blog;
