import {useContext} from "react";
import {SpeakerContext} from "./contexts/SpeakerContext";

function SpeakerDelete() {
  const {speaker, deleteRecord} = useContext(SpeakerContext);
  return (
    <span>
      <a href="#" className="remSes">
        <i
          onClick={e => {
            e.preventDefault();
            if (
              window.confirm("Are you sure you want to delete this speaker")
            ) {
              deleteRecord(speaker);
            }
          }}
        >
          -
        </i>
      </a>
      <span className="pl-2">Delete Speaker</span>
    </span>
  );
}

export default SpeakerDelete;
