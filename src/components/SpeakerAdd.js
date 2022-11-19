function SpeakerAdd({eventYear, insertRecord}) {
  return (
    <a href="#" className="addSes">
      <i
        onClick={event => {
          event.preventDefault();
          const firstLast = window.prompt("Enter first and last name: ", "");
          const firstLastArray = firstLast.split(" ");

          insertRecord({
            id: "99999",
            first: firstLastArray[0],
            last: firstLastArray[1],
            sessions: [
              {
                id: "88888",
                title: `New Sesstion For ${firstLastArray[0]}`,
                room: {
                  name: "Main Ball Room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
}

export default SpeakerAdd;
