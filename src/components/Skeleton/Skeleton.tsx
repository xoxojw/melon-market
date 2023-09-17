import { cls } from "@/libs/client/utils";

interface SkeletonProps {
  width?: string;
  height?: string;
  color?: "light" | "dark";
  radius?: "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-full";
}

const Skeleton = ({
  width = "w-full",
  height = "h-full",
  color = "light",
  radius = "rounded-md",
}: SkeletonProps) => {
  const bgColor = color === "light" ? "bg-gray-100" : "bg-gray-200";
  return <div className={cls(width, height, bgColor, radius, "animate-pulse")} />;
};

export default Skeleton;
