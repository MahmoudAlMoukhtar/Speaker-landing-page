import SpeakerCard from "./Speaker";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestRest, {REQUEST_STATUS} from "./hooks/useRequestRest";
import {data} from "../../SpeakerData";
import {useContext} from "react";
import {SpeakerFilterContext} from "./contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";
const SpeakersList = () => {
  const {
    data: speakerData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();

  const {searchQuery, eventYear} = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE)
    return (
      <div className="text-red-500 text-center">
        Error: <b>loading Speaker Data Failed {error}</b>
      </div>
    );

  /* 
  if (isLoading === true)
    return (
      <span className="border-l-4 border-t-4 border-teal-500 rounded-full animate-spin">
        <div className="p-8"></div>
      </span>
    ); */
  return (
    <ReactPlaceholder
      type="media"
      rows={50}
      className="speakerlist-placeholder animate-pulse"
      ready={requestStatus === REQUEST_STATUS.SUCCESS}
    >
      <div className="speaker-list flex flex-wrap items-start justify-center xl:justify-center content-center gap-x-10">
        {speakerData
          .filter(speaker => {
            return (
              speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
              speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
          .filter(function (speaker) {
            return speaker.sessions.find(sesstion => {
              return eventYear !== "All Sesstion"
                ? sesstion.eventYear === eventYear
                : true;
            });
          })

          .map(speaker => {
            return (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                updateRecord={updateRecord}
                insertRecord={insertRecord}
                deleteRecord={deleteRecord}
              />
            );
          })}
      </div>
    </ReactPlaceholder>
  );
};

export default SpeakersList;
/* 
<SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
*/
