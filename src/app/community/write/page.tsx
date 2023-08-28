import Template from "@/app/template";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Template canGoBack>
      <form className="px-4 py-10">
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-melon-500 rounded-md border-gray-300 focus:border-melon-500 resize-none"
          rows={4}
          placeholder="질문을 남겨보세요!"
        />
        <button className="w-full mt-2 px-4 py-2 bg-melon-300 text-white border-transparent outline-melon-400 hover:bg-melon-400 focus:ring-2 focus:ring-melon-400 focus:border-melon-400 rounded-md shadow-sm font-medium transition ease-in-out duration-200">
          Submit
        </button>
      </form>
    </Template>
  );
};

export default Write;