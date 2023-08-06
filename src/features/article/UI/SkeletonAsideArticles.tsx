import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonAsideArticles = () => {
  return (
    <aside className="article-content--aside">
      <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={200} />
      <div>
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={250} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={250} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={250} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={250} />
      </div>
      <div>
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={250} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={250} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={250} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={250} />
      </div>
    </aside>
  );
};

export default SkeletonAsideArticles;
