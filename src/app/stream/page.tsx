import type { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <>
      <div className="divide-y-2 px-4 py-10 space-y-4">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => 
          <div className="pt-4" key={i}>
            {/* aspect-video : 높이가 영상 비율에 맞게 자동조정됨 */}
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="text-gray-700 text-lg mt-2">라이브 스트림 재생 영역</h3>
          </div>
         )}
      </div>
      <button className="fixed bottom-8 right-5 bg-melon-300 text-white rounded-full p-4 shadow-lg hover:bg-melon-400 transition ease-in-out duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </button>
    </>
  )
};

export default Stream;