import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const SkeletonArticle = () => {
  return (
    <Stack spacing={1}>
      <div className="skeleton">
        <Skeleton variant="rectangular" width={200} height={200} />
        <div>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
          <Skeleton variant="rectangular" width={600} height={100} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
      </div>
      <div className="skeleton">
        <Skeleton variant="rectangular" width={200} height={200} />
        <div>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
          <Skeleton variant="rectangular" width={600} height={100} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
      </div>
      <div className="skeleton">
        <Skeleton variant="rectangular" width={200} height={200} />
        <div>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
          <Skeleton variant="rectangular" width={600} height={100} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
      </div>
    </Stack>
  );
};

export default SkeletonArticle;
