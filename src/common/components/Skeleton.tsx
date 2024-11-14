interface SkeletonProps {
  className: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`${className} bg-color-primary-hover bg-gradient-to-r from-blue-500 via-color-primary-hover to-blue-500 animate-loadingWave bg-[length:200%_100%] rounded-md`}
    ></div>
  );
};
