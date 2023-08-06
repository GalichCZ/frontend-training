import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonRows = () => {
  return (
    <>
      <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} />
    </>
  );
};

export default SkeletonRows;
