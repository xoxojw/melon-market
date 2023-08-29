import type { NextPage } from "next";
import Template from "../template";

const EditProfile: NextPage = () => {
  return (
    <Template canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-melon-500 text-gray-700"
          >
            Change
            <input id="picture" type="file" className="hidden" accept="image/*" />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-melon-500 focus:border-melon-500"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="input"
              type="number"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-melon-500 focus:border-melon-500"
              required
            />
          </div>
        </div>
        <button className="w-full mx-auto items-center mt-6 px-4 py-2 bg-melon-300 text-white border-transparent outline-melon-400 hover:bg-melon-400 focus:border-melon-400 rounded-md shadow-sm font-medium transition ease-in-out duration-200">
          Update profile
        </button>
      </div>
    </Template>
  );
};

export default EditProfile;