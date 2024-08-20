import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { setDraft } from "@/lib/researchSlice";
import { toggleOpenDraft } from "@/lib/openDraftSlice";

const ResearcherDocs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { publishedDrafts } = useSelector((state: RootState) => state.research);

  const handleCreateClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleResearchObjectClick = () => {
    dispatch(setDraft("")); // Clear the current draft
    setIsDropdownOpen(false);
  };

  const handleSubmissionPackageClick = () => {
    console.log("Submission Package clicked");
    setIsDropdownOpen(false);
  };

  const handleDraftClick = (draft: string) => {
    dispatch(setDraft(draft));
    dispatch(toggleOpenDraft());
  };

  return (
    <div className="profile-r-side">
      <div className="profile-col">
        <div className="profile-row flex gap-4 pb-2 text-xs">
          <button className="hover:bg-[#4f4f4f] p-2">My Nodes</button>
          <button className="hover:bg-[#4f4f4f] p-2">Shared</button>
          <button className="hover:bg-[#4f4f4f] p-2">Published</button>
          <div className="relative">
            <button
              className="p-2 pb-1 bg-[#0b4559] hover:bg-[#0d5269] flex items-center"
              onClick={handleCreateClick}
            >
              + Create
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-[#353535] rounded-md shadow-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4f4f4f]"
                  onClick={handleResearchObjectClick}
                >
                  Research Object
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4f4f4f]"
                  onClick={handleSubmissionPackageClick}
                >
                  Submission Package
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {publishedDrafts.length > 0 ? (
            publishedDrafts.map((draft, index) => (
              <div
                key={index}
                className="profile-row p-6 bg-[#353535] cursor-pointer hover:bg-[#5f5f5f]"
                onClick={() => handleDraftClick(draft)}
              >
                <p className="text-white">
                  {draft.substring(0, 50)}
                  {draft.length > 50 ? "..." : ""}
                </p>
              </div>
            ))
          ) : (
            <div className="profile-row p-12 bg-[#353535]">
              <p className="text-white text-center">
                No published documents yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearcherDocs;
