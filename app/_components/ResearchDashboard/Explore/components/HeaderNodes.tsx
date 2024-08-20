import React, { useState } from "react";

export type View = "all" | "community";

interface HeaderNodesProps {
  setView: React.Dispatch<React.SetStateAction<View>>;
}

const HeaderNodes = ({ setView }: HeaderNodesProps) => {
  const [activeView, setActiveView] = useState<View>("all");

  const handleViewChange = (view: View) => {
    setActiveView(view);
    setView(view);
  };

  return (
    <div className="header flex flex-col items-start p-4">
      <h3 className="text-xl font-bold mb-4">Browse</h3>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => handleViewChange("all")}
          className={`px-4 py-2 rounded ${
            activeView === "all" ? "text-white" : "text-slate-400"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleViewChange("community")}
          className={`px-4 py-2 rounded ${
            activeView === "community" ? "text-white" : "text-slate-400"
          }`}
        >
          By Community
        </button>
      </div>
      <div className="header-title text-center uppercase text-xs w-full">
        <h3>
          {activeView === "community"
            ? "Explore research curated by communities"
            : "view all research published on the codex protocol"}
        </h3>
      </div>
    </div>
  );
};

export default HeaderNodes;
