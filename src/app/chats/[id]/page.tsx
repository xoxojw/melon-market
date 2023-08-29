import Template from "@/app/template";
import Message from "@/components/Message";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Template canGoBack>
      <div className="py-10 px-4 space-y-4 flex flex-col">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />
        <form className="fixed max-w-3xl mx-auto bottom-0 inset-x-0 py-4 bg-white">
          <div className="flex relative items-center mx-2">
            <input type="text" className="w-full px-4 py-3 shadow-sm rounded-full border-gray-300 focus:ring-melon-500 focus:outline-none focus:border-melon-500" />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex items-center bg-melon-300 rounded-full px-3 py-1.5 text-sm text-white hover:bg-melon-400 focus:ring-2 focus:ring-offset-2 focus:ring-melon-500 focus:outline-none">&rarr;</button>
            </div>
          </div>
        </form>
      </div>
    </Template>
  );
};

export default ChatDetail;