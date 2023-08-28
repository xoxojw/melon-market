import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4 flex flex-col">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-3 border border-gray-300 rounded-md">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-3 border border-gray-300 rounded-md">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-3 border border-gray-300 rounded-md">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="fixed max-w-3xl mx-auto bottom-0 inset-x-0 py-4 bg-white">
        <div className="flex relative items-center mx-5">
          <input type="text" className="w-full px-4 py-3 shadow-sm rounded-full border-gray-300 focus:ring-melon-500 focus:outline-none focus:border-melon-500" />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-melon-300 rounded-full px-3 py-1.5 text-sm text-white hover:bg-melon-400 focus:ring-2 focus:ring-offset-2 focus:ring-melon-500 focus:outline-none">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;