import React from "react";
import ResearcherDocs from "./components/ResearcherDocs";
import ResearcherInfo from "./components/ResearcherInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import DraftDetails from "./DraftDetailView";

const ResearchProfile = () => {
  const { launchApp } = useSelector((state: RootState) => state.launchApp);
  const { openDraft } = useSelector((state: RootState) => state.openDraft);

  return (
    <div
      className={`${
        launchApp
          ? "p-4 flex justify-center gap-10"
          : "p-4 flex justify-between"
      }`}
    >
      {openDraft ? (
        <DraftDetails />
      ) : (
        <>
          <ResearcherInfo />
          <ResearcherDocs />
        </>
      )}
    </div>
  );
};

export default ResearchProfile;
