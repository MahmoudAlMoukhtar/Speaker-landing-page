import {useContext, useState} from "react";
import {SpeakerFilterContext} from "./contexts/SpeakerFilterContext";
import {SpeakerContext, SpeakerProvider} from "./contexts/SpeakerContext";
const Sesstion = ({title, RoomName}) => {
  return (
    <span className="text-gray-500 bg-gray-200 p-2 text-xs">
      {title} <strong>{RoomName}</strong>
    </span>
  );
};

const Sessions = () => {
  const {eventYear} = useContext(SpeakerFilterContext);
  const {
    speaker: {sessions},
  } = useContext(SpeakerContext);
  return (
    <div
      id="container-lucter"
      className="flex flex-col gap-y-4 justify-start justify-self-end border-2 border-gray-400 w-full"
    >
      {sessions
        .filter(function (session) {
          return session.eventYear === eventYear;
        })
        .map(function (session) {
          return (
            <Sesstion
              title={session.title}
              RoomName={session.room.name}
              key={session.id}
            />
          );
        })}
    </div>
  );
};
function ImageWithFallback({src, ...props}) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return <img src={imgSrc} {...props} onError={onError} />;
}

const SpeakerImg = () => {
  const {
    speaker: {id, first, last},
  } = useContext(SpeakerContext);

  return (
    <ImageWithFallback
      src={`/images/speaker-${id}.jpg`}
      alt={`${first} ${last}`}
      className=" w-64 h-64 rounded"
    />
  );
};

const SpeakerFavorite = () => {
  const [transition, setTransition] = useState(false);
  const {speaker, updateRecord} = useContext(SpeakerContext);
  const {favorite} = speaker;
  function doneCallBack() {
    setTransition(false);
    console.log(`donCallBack: ${new Date().getMilliseconds()}`);
  }
  return (
    <div className="action pb-1">
      <span
        onClick={function () {
          setTransition(true);
          updateRecord({...speaker, favorite: !speaker.favorite}, doneCallBack);
        }}
      >
        <i
          className={
            favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />

        <span className="text-md pl-1 font-semibold">Favorite</span>
        {transition && (
          <span className="fas fa-circle-notch fa-spin mx-1"></span>
        )}
      </span>
    </div>
  );
};

const SpeakerInfo = () => {
  const {
    speaker: {
      id,
      first,
      last,
      bio,
      company,
      twitterHandle,
      favorite,
      toggleFavorite,
    },
  } = useContext(SpeakerContext);
  return (
    <div id="info-speaker" className="flex flex-col gap-y-4">
      <h1 className="text-xl font-bold">{`${first} ${last}`}</h1>
      <div>
        <SpeakerFavorite />
        <p className="text-gray-500 text-xs">{bio}</p>
        <div className="social flex mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6 className="text-sm text-gray-400">{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6 className="text-sm text-gray-400">{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
const SpeakerCard = ({speaker, updateRecord, insertRecord, deleteRecord}) => {
  const {showSessions} = useContext(SpeakerFilterContext);
  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div
        id="card-speaker"
        className="flex flex-col justify-start items-center gap-y-8 w-80 shadow-2xl p-2 w-72 transition duration-300  hover:scale-105 my-2 cursor-pointer"
      >
        <SpeakerImg />
        <SpeakerInfo />

        {showSessions === true && <Sessions />}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
};

export default SpeakerCard;
/* toggleFavorite={doneCallBack => {
                  updateRecord(
                    {...speaker, favorite: !speaker.favorite},
                    doneCallBack
                  );
                }} */
