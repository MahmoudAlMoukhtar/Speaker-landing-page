import {ThemeContext} from "./Layout";
import {useContext} from "react";
import {SpeakerFilterContext} from "./contexts/SpeakerFilterContext";

const Toolbar = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  } = useContext(SpeakerFilterContext);

  return (
    <section className="toolbar dark-theme-header">
      <div className="container mx-auto">
        <div className=" ">
          <ul className="toolrow flex lg:justify-between gap-2 flex-col justify-center lg:flex-row items-center p-2">
            <div className="w-full lg:w-auto flex justify-between items-center gap-2">
              <b>Show Sesstion &nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onClick={event => {
                    setShowSessions(event.target.checked);
                  }}
                />
                <span className="switch"></span>
              </label>
            </div>

            <label className="dropdown flex justify-between w-full lg:w-auto items-center gap-2">
              <strong className={theme === "dark" && "text-white"}>
                Theme
              </strong>
              <select
                className="from-control theme"
                value={theme}
                onChange={event => {
                  setTheme(event.target.value);
                }}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>

            <div className="w-full flex justify-between lg:w-auto items-center gap-2">
              <strong className={theme == "dark" ? "text-white" : "text-black"}>
                Year
              </strong>
              <label className="dropmenu">
                <select
                  className="from-control"
                  value={eventYear}
                  onChange={event => {
                    setEventYear(event.target.value);
                  }}
                >
                  {EVENT_YEARS.map(year => {
                    return (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div className="input-group w-full flex justify-between lg:w-auto items-center gap-2">
              <input
                type="text"
                className="from-control "
                placeholder="Search..."
                value={searchQuery}
                onInput={event => {
                  setSearchQuery(event.target.value);
                }}
              />
              <div className="input-group-append">
                <button className="" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Toolbar;
