import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WeatherSkeleton = () => {
  return (
    <>
    {/* wrap skeletontheme where we use all components --> app() */}
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        {/* baseColor=#313131 highlightColor=#525252 -----> for dark theme  */}
        <Skeleton />
        <Skeleton count={5} />
      </SkeletonTheme>
    </>
  );
};

export default WeatherSkeleton;
