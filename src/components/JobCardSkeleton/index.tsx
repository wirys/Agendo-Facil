import { Card } from "../ui/card";

export function JobCardSkeleton() {
  return (
    <Card className="flex p-4 items-center gap-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-1/4">
        <div className="rounded-md bg-gray-200 w-20 h-20"></div>
      </div>

      {/* Text Skeleton */}
      <div className="w-2/4 flex flex-col gap-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
      </div>

      {/* Button Skeleton */}
      <div className="w-1/4">
        <div className="h-8 bg-gray-200 rounded"></div>
      </div>
    </Card>
  );
}
