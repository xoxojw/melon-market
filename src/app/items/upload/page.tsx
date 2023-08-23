import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-8">
      <div>
          <label className="w-full h-60 py-6 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-sm hover:text-melon-500 hover:border-melon-200 transition ease-in-out duration-200 cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden" type="file" />
          </label>
      </div>
      <div className="my-5">
        <label
          className="mb-1 block text-sm font-medium text-gray-900"
          htmlFor="price">
          판매 가격
        </label>
        <div className="rounded-md relative flex items-center justify-center shadow-sm">
          <div className="absolute left-0 pl-3 flex items-center justify-center text-gray-500 text-sm">
            <span className="pointer-events-none">₩</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0"
            className="appearance-none pl-8 w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-melon-300 focus:border-melon-300"
          />
          <div className="absolute right-0 pr-3 flex items-center justify-center">
            <span className="text-gray-500 pointer-events-none">KRW</span>
          </div>
        </div>
      </div>
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-900"
        >
          제품 설명
        </label>
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-melon-300 focus:border-melon-300 rounded-md border-gray-300 resize-none"
          rows={10} />
      </div>
      <button
        className="w-full mx-auto items-center mt-6 px-4 py-2 bg-melon-300 text-white border-transparent outline-melon-400 hover:bg-melon-400 focus:border-melon-400 rounded-md shadow-sm font-medium transition ease-in-out duration-200"
      >
        업로드 하기
      </button>
    </div>
  );
};

export default Upload;