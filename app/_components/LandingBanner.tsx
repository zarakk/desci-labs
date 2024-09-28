"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DemoInterface from "./DemoInterface";
import Navbar from "./Navbar";
import HeaderBanner from "./HeaderBanner";
import { RootState } from "@/lib/store";
import { Loader2 } from "lucide-react";

const LandingBanner = () => {
  const { launchApp } = useSelector((state: RootState) => state.launchApp);
  const [isLoading, setIsLoading] = useState(false);
  console.log(launchApp);
  useEffect(() => {
    if (launchApp) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Adjust this delay as needed
      return () => clearTimeout(timer);
    }
  }, [launchApp]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
        </div>
      )}

      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          launchApp && !isLoading ? "opacity-100 z-20" : "opacity-0 z-0"
        }`}
      >
        <DemoInterface />
      </div>

      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          launchApp ? "opacity-0 z-0 filter blur-sm" : "opacity-100 z-10"
        }`}
      >
        <div className="space">
          <div className="stars"></div>
          <div className="nebula"></div>
        </div>

        <div className="relative z-10 h-full overflow-y-auto">
          <div className="mx-auto p-4 max-w-screen-3xl">
            <Navbar />
            <HeaderBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
