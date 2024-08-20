import React from "react";

const CommunitySection = () => {
  return (
    <div className="community-section flex justify-center mt-8 px-12 py-4 border-b border-[#272a2d] pb-8">
      <div className="community-title w-2/3">
        <ul className="text-xs">
          <li className="p-1 border-b border-[#272a2d] capitalize cursor-pointer hover:text-gray-200">
            Comunity curated nodes
          </li>
          <li className="p-1 border-b border-[#272a2d] capitalize cursor-pointer hover:text-gray-200">
            BlockScience
          </li>
          <li className="p-1 border-b border-[#272a2d] capitalize cursor-pointer hover:text-gray-200">
            Desci Foundation
          </li>
          <li className="p-1 border-b border-[#272a2d] capitalize cursor-pointer hover:text-gray-200">
            Gridcoin
          </li>
          <li className="p-1 border-b border-[#272a2d] capitalize cursor-pointer hover:text-gray-200">
            Longevist
          </li>
          <li className="p-1 border-b border-[#272a2d] capitalize cursor-pointer hover:text-gray-200">
            MoonDAO
          </li>
        </ul>
      </div>
      <div className="community-content p-4 border w-full rounded-lg bg-[#282828]">
        <h3>All Communities</h3>
        <p>
          The Nodes below meet the curation criteria of at least one DeSci
          community on the network. Select a specific community to view the
          Nodes they have curated.
        </p>
      </div>
    </div>
  );
};

export default CommunitySection;
