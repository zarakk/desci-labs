import { setLaunchApp, toggleLaunchApp } from "@/lib/launchAppSlice";
import { AppDispatch } from "@/lib/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ResearcherInfo = () => {
  const [name, setName] = useState("Add your name");
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = () => {
    dispatch(toggleLaunchApp());
  };

  return (
    <div className="flex flex-col gap-10">
      <h3 className="">Profile</h3>
      <div className="p-4 bg-[#353535] w-64 pb-1">
        <div className="flex items-center justify-center">
          <div className="profile p-4 rounded-full mb-2 border border-white w-12 h-12 flex justify-center items-center">
            Z
          </div>
        </div>
        <div className="priv-info p-2 pt-0">
          <p className="text-xs bg-[#4f4f4f] p-1">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="bg-[#4f4f4f] outline-none no-underline"
            />
          </p>
          <p className="text-xs mt-6 flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className=""
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>{" "}
            email@gmail.com
          </p>
        </div>

        <div className="priv-storage p-2 text-xs pt-0">
          <div className="p-4 px-0 pt-1">
            <p className="text-[8px] uppercase">Private Storage</p>
            <p className="text-[10px]">1.29 kB of 100 GB Used</p>
          </div>
          <div className="Theme p-4 flex justify-between text-[10px] px-0 border-b-2 pt-1 pb-2">
            <p>Theme</p>
            <div className="flex gap-2">
              <button className="border border-white p-1 py-0 hover:bg-[#4f4f4f]">
                Auto
              </button>
              <button className="border border-white p-1 py-0 hover:bg-[#4f4f4f]">
                light
              </button>
              <button className="border border-white p-1 py-0 hover:bg-[#4f4f4f]">
                Dark
              </button>
            </div>
          </div>
        </div>
        <div className="adv-options p-4 px-2 pt-1 pb-1">
          <h3 className=" text-[10px] border-b-2 pb-2">Advanced Options</h3>
        </div>
        <div className="signout text-xs ">
          <button
            className="hover:bg-[#4f4f4f] p-2 ml-2 text-center"
            onClick={handleToggle}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearcherInfo;
