import React from "react";

const NodeSection = () => {
  return (
    <div className="nodes-section flex justify-center px-12 py-4 border-b border-[#272a2d] pt-4">
      <div className="curated-nodes w-2/3">
        <h3 className="uppercase text-xs">curated nodes{" (0)"}</h3>
      </div>

      <NodeCard />
    </div>
  );
};

const NodeCard = () => {
  return (
    <div className="node-content w-full border rounded-xl p-4 bg-[#282828]">
      <div className="node-card">
        <div className="node-image"></div>
        <div className="node-content">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <h3 className="bg-[#1487a6] p-2 rounded-full text-xs uppercase">
                dpid://138/v2
              </h3>
            </div>
            <h3>
              Treatment with a selective histone deacetylase 1 and 2 inhibitor
              in aged mice rejuvenates multiple organ systems
            </h3>
            <div className="node-author text-xs ">Allessandra Tammaro</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="node-post">5/02/2024</div>
            <button className="rounded-full px-4 py-2 border border-slate-700">
              {"->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NodeSection;
