import Template from "@/app/template";
import { Button } from "@/components";
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Template canGoBack>
      <div className="space-y-5 px-4 py-8">
        <div>
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
        <Button text="라이브 스트림 시청하기" />
      </div>
    </Template>
  )
}

export default Create;