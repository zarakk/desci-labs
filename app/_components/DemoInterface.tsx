"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SidebarProps } from "@/Types/Types";
import { sections } from "@/Constants/Constants";
import ResearchDashboard from "./ResearchDashboard/ResearchDashboard";
import ResearchProfile from "./ResearchDashboard/ResearchProfile/ResearchProfile";
import Explore from "./ResearchDashboard/Explore/Explore";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Loader2 } from "lucide-react";

const Sidebar = ({
  sections,
  activeSection,
  setActiveSection,
}: SidebarProps) => {
  return (
    <div className="sidebar flex flex-col items-start w-16 px-1">
      {sections.map(({ title, image }) => (
        <button
          key={title}
          className={
            activeSection === title
              ? "active bg-[#353535] p-4 w-full rounded text-white"
              : "p-4 hover:bg-[#353535] duration-300 ease-in-out border-radius-300 w-full rounded"
          }
          onClick={() => setActiveSection(title)}
        >
          <Image
            className="bg-contain invert"
            src={`/${image}`}
            alt="section-image"
            width={24}
            height={12}
          />
        </button>
      ))}
    </div>
  );
};

interface DemoInterfaceProps {
  launchApp: boolean;
  setLaunchApp: React.Dispatch<React.SetStateAction<boolean>>;
}

const DemoInterface = () => {
  const [activeSection, setActiveSection] = useState("Explore");
  const { launchApp } = useSelector((state: RootState) => state.launchApp);

  return (
    <div
      className={`${
        launchApp
          ? "app flex text-black bg-[#282828] w-full h-screen"
          : "app flex text-black bg-[#282828] w-full"
      }`}
    >
      <div
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div
        className={`content p-4 text-white bg-[#1b1b1b] w-full  overflow-auto transition-all duration-500 ease-in-out relative
          ${launchApp ? "h-[100vh] opacity-100 " : "opacity-100 h-[70vh]"}
        `}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div>
          {activeSection === "Add" && <ResearchDashboard />}
          {activeSection === "User" && <ResearchProfile />}
          {activeSection === "Explore" && <Explore />}
        </div>
      </div>
    </div>
  );
};

export default DemoInterface;
