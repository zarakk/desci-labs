import { setLaunchApp, toggleLaunchApp } from "@/lib/launchAppSlice";
import { RootState } from "@/lib/store";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { launchApp } = useSelector((state: RootState) => state.launchApp);

  const handleToggle = () => {
    dispatch(toggleLaunchApp());
  };
  return (
    !launchApp && (
      <div className="flex justify-around text-white items-center p-4 max-w-screen-3xl mx-auto">
        <div> Desci Labs </div>
        <div className="text-white flex gap-4">
          <Link href="/">Blogs</Link>
          <Link href="/">Codex</Link>
          <Link href="/">User Docs</Link>
        </div>
        <div className="btns flex gap-2">
          <button
            className="font-bold bg-white px-4 py-4 text-black rounded-full"
            onClick={handleToggle}
          >
            Launch App
          </button>
        </div>
      </div>
    )
  );
};

export default Navbar;
