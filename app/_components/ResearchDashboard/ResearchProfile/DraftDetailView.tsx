import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { X } from "lucide-react"; // Assuming you're using lucide-react for icons
import { AppDispatch, RootState } from "@/lib/store";
import { toggleOpenDraft } from "@/lib/openDraftSlice";
import Image from "next/image";

const DraftDetailView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { openDraft } = useSelector((state: RootState) => state.openDraft);
  const [showNav, setShowNav] = useState(false);
  const { draft, files, title } = useSelector(
    (state: RootState) => state.research
  );

  if (!openDraft) return null;

  return (
    <div className="p-4 flex gap-4 pl-0 w-full h-full">
      <div
        className={`${
          showNav ? "w-1/3 bg-[#282828] p-2 opacity-100" : "w-0 opacity-0"
        } transition-all duration-300`}
      >
        <>
          <div className="overflow-x-auto">
            <div className="icons-row flex justify-start p-2 border-b">
              <button
                onClick={() => dispatch(toggleOpenDraft())}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="icon px-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  viewBox="0 0 19 18"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M15.5 7.5C15.6989 7.5 15.8897 7.42098 16.0303 7.28033C16.171 7.13968 16.25 6.94891 16.25 6.75V4.5C16.25 4.30109 16.171 4.11032 16.0303 3.96967C15.8897 3.82902 15.6989 3.75 15.5 3.75H13.625C13.5086 3.75 13.3937 3.72289 13.2896 3.67082C13.1854 3.61875 13.0949 3.54315 13.025 3.45L12.35 2.55C12.2801 2.45685 12.1896 2.38125 12.0854 2.32918C11.9813 2.27711 11.8664 2.25 11.75 2.25H10.25C10.0511 2.25 9.86032 2.32902 9.71967 2.46967C9.57902 2.61032 9.5 2.80109 9.5 3V6.75C9.5 6.94891 9.57902 7.13968 9.71967 7.28033C9.86032 7.42098 10.0511 7.5 10.25 7.5H15.5Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5 15.75C15.6989 15.75 15.8897 15.671 16.0303 15.5303C16.171 15.3897 16.25 15.1989 16.25 15V12.75C16.25 12.5511 16.171 12.3603 16.0303 12.2197C15.8897 12.079 15.6989 12 15.5 12H13.325C13.1878 11.9982 13.0537 11.9588 12.9373 11.8861C12.8209 11.8133 12.7267 11.7101 12.665 11.5875L12.35 10.95C12.2914 10.8158 12.1949 10.7018 12.0723 10.6218C11.9497 10.5418 11.8064 10.4995 11.66 10.5H10.25C10.0511 10.5 9.86032 10.579 9.71967 10.7197C9.57902 10.8603 9.5 11.0511 9.5 11.25V15C9.5 15.1989 9.57902 15.3897 9.71967 15.5303C9.86032 15.671 10.0511 15.75 10.25 15.75H15.5Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.75 3.75C2.75 4.14782 2.90804 4.52936 3.18934 4.81066C3.47064 5.09196 3.85218 5.25 4.25 5.25H6.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.75 2.25V12C2.75 12.3978 2.90804 12.7794 3.18934 13.0607C3.47064 13.342 3.85218 13.5 4.25 13.5H6.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="icon px-1 cursor-pointer">
                <Image src={"/icon-2.svg"} alt="icon" width={20} height={16} />
              </div>
              <div className="icon px-1 cursor-pointer">
                <Image src={"/icon-3.svg"} alt="icon" width={20} height={16} />
              </div>
            </div>
          </div>
          <div className="pinned-work mt-4">
            <h3>Pinned</h3>
            <p className="p-2 border border-slate-700 text-xs text-gray-300">
              Drag files here to pin to the top
            </p>
          </div>
          <div className="file-upload mt-4">
            <h3>Files</h3>
            <div className="border border-gray-700 text-xs p-4 cursor-pointer h-36 flex flex-col justify-center items-center">
              <input type="file" multiple className="hidden" id="fileInput" />
              <label htmlFor="fileInput" className="cursor-pointer">
                Select files or drop here
              </label>
              <ul className="mt-2">
                {files.map((file, index) => (
                  <li key={index} className="text-white">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="p-2 border border-white w-full mt-4">View</button>
        </>
      </div>
      <div className="w-full">
        <div
          className="show-nav cursor-pointer flex flex-col gap-1 w-6"
          onClick={() => setShowNav(!showNav)}
        >
          <div className="line border-2 mt-2 border-[#4f4f4f]"></div>
          <div className="line border-2 border-[#4f4f4f]"></div>
          <div className="line border-2 mb-2 border-[#4f4f4f]"></div>
        </div>
        <div className="bg-transparent p-2">
          <p className="text-[#fbfbfd] bg-transparent w-full outline-none text-5xl">
            {title}
          </p>
        </div>
        <div className="">
          <h3 className="text-[#777b84] my-2">Last Published</h3>
          <p className="text-white bg-transparent w-full p-2 pt-0 text-3xl">
            {draft}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DraftDetailView;
