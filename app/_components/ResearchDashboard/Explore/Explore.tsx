import React, { useState } from "react";
import HeaderNodes, { View } from "./components/HeaderNodes";
import CommunitySection from "./components/CommunitySection";
import NodeSection from "./components/NodeSection";
import AllNodesSection from "./components/AllNodesSection";

const Explore = () => {
  const [view, setView] = useState<View>("all");

  return (
    <div className="p-4">
      <HeaderNodes setView={setView} />
      {view === "all" && <AllNodesSection />}
      {view === "community" && (
        <>
          <CommunitySection />
          <NodeSection />
        </>
      )}
    </div>
  );
};

export default Explore;
