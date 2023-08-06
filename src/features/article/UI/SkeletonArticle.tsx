import { Skeleton } from "@mui/material";

const SkeletonArticle = () => {
  return (
    <div className="article-skeleton">
      <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={600} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
      <Skeleton variant="rectangular" width={700} height={400} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={700} />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        width={700}
        height={50}
      />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={700} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={700} />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        width={700}
        height={50}
      />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={700} />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        width={700}
        height={50}
      />
    </div>
  );
};

export default SkeletonArticle;
