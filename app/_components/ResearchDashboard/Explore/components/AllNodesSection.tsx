import { cardData } from "@/Constants/Constants";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

const AllNodesSection = () => {
  const { launchApp } = useSelector((state: RootState) => state.launchApp);

  return (
    <div className="all-section">
      <div
        className={`${
          launchApp ? "w-full" : "w-[650px]"
        } research-cards-section border-b mt-10 pb-10 flex gap-7  overflow-x-scroll `}
        style={{ scrollbarWidth: "none" }}
      >
        {cardData.slice(0, 5).map((card) => (
          <NodeCard key={card.id} {...card} />
        ))}
      </div>
      <div className="more-nodes-section w-2/3 mt-4 flex flex-col gap-4">
        {cardData.slice(5).map((card) => (
          <NodeCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

type NodeCardType = {
  dpid: string;
  title: String;
  author: string;
  date: string;
};

const NodeCard = ({ dpid, title, author, date }: NodeCardType) => {
  return (
    <div className="node-content w-80 flex-shrink-0 border rounded-xl p-4 bg-[#282828]">
      <div className="node-card">
        <div className="node-image"></div>
        <div className="node-content">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <h3 className="bg-[#1487a6] p-2 rounded-full text-xs uppercase">
                {dpid}
              </h3>
            </div>
            <h3 className="text-sm mt-2 line-clamp-3">{title}</h3>
            <div className="node-author text-xs mt-2">{author}</div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="node-post text-xs">{date}</div>
            <button className="rounded-full px-4 py-2 border border-slate-700">
              {"->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNodesSection;
