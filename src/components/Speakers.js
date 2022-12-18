import SpeakersList from "./SpeakersList";
import Toolbar from "./SpeakerToolbar";
import React from "react";
import {SpeakerFilterProvider} from "./contexts/SpeakerFilterContext";

const Speakers = () => {
  return (
    <SpeakerFilterProvider startingShowSessions={true}>
      <div className="">
        <Toolbar />
        <SpeakersList />
      </div>
    </SpeakerFilterProvider>
  );
};
export default Speakers;
