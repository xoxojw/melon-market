"use client";
import Template from "@/app/template";
import { ProductDetailLoading } from "@/components";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";

const ProductDetail = () => {
  const params = useParams();
  const { data, isLoading } = useSWR(params.id ? `/api/products/${params.id}` : null);
  if (isLoading) return <ProductDetailLoading />
  return (
    <Template canGoBack>
      <div className="px-4 pb-10">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <div className="flex cursor-pointer py-5 border-t border-b items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-200" />
            <div>
              <p className="text-sm font-medium text-gray-700">{data?.product.user.name}</p>
              <Link href={`users//profile/${data?.product.user.id}`}>
                <span className="text-xs font-medium text-gray-500">View profile &rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mt-7">
            <h1 className="text-3xl font-bold text-gray-900">{data?.product.name}</h1>
            <span className="block text-3xl mt-3">₩{data?.product.price}</span>
            <p className="text-base my-6 text-gray-700">
              {data?.product.description}
            </p>
            <div className="flex items-center justify-between space-x-4">
              <button className="flex-1 bg-melon-300 text-white rounded-md py-3 hover:bg-melon-400 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-melon-700 focus:border-melon-300">Talk to seller</button>
              <button className="p-3 rounded-md flex items-center justify-center text-gray-600 hover:text-red-400">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-5 border-t">
          <h2 className="mt-7 text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 w-full bg-slate-200 mb-3" />
                <h3 className="text-gray-700">Galaxy S60</h3>
                <span className="font-medium text-gray-900">$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ProductDetail;