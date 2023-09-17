import { Skeleton } from "@/components";

const ProductDetailLoading = () => {
  return (
    <div className="px-4 pb-10">
        <div className="mb-8">
          <Skeleton height="h-96" radius="rounded-none" color="dark" />
          <div className="flex items-center py-5 border-t border-b space-x-3">
            <Skeleton width="w-12" height="h-12" radius="rounded-full" />
            <Skeleton width="w-20" height="h-6" />
          </div>
          <div className="flex flex-col mt-7 space-y-10">
            <div className="flex flex-col space-y-3">
              <Skeleton width="w-32" height="h-7" color="dark" />
              <Skeleton width="w-20" height="h-5" color="dark" />
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton width="w-3/4" height="h-5" />
              <Skeleton width="w-96" height="h-5" />
              <Skeleton width="w-80" height="h-5" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductDetailLoading