import React, { useState } from "react";
import Image from "next/image";
import { IconsType } from "@/Types/Types";
import DemoInterface from "./DemoInterface";
import { icons } from "@/Constants/Constants";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const IconComponent = ({ icon, description }: IconsType) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={icon}
        className="w-12"
        height={12}
        width={12}
        alt={icon}
      ></Image>
      <p>{description}</p>
    </div>
  );
};

const HeaderBanner = () => {
  const [activeDashboard, setActiveDashboard] = useState("researchers");

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 max-w-screen-2xl mx-auto">
        <div className="text-white text-center md:text-left p-4 h-96 w-3/4">
          <h3 className="text-5xl font-bold py-6">
            Let&apos;s build the future of science, together
          </h3>
          <p className="pb-24 text-md pr-8">
            New infrastructure for the next era of science
          </p>
          <div className="cta flex gap-2 justify-center md:justify-start">
            <button
              className={`${
                activeDashboard == "researchers"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white"
              } px-4 py-2 font-bold rounded-full `}
              onClick={() => setActiveDashboard("researchers")}
            >
              For Researchers
            </button>
            <button
              className={`${
                activeDashboard == "journals"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white"
              } px-4 py-2 font-bold rounded-full `}
              onClick={() => setActiveDashboard("journals")}
            >
              For Journals
            </button>
            <button className="bg-transparent px-4 py-2 text-white border border-white font-bold rounded-full">
              For Institutions
            </button>
          </div>
        </div>
        <div
          className=" p-4 w-full"
          style={{
            transform: "perspective(800px) rotateY(-8deg)",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.024) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px, rgba(0, 0, 0, 0.1) 0px 20px 30px 0px",
          }}
        >
          <DemoInterface />
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
