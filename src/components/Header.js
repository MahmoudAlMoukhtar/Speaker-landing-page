import {ThemeContext} from "./Layout";
import {useContext} from "react";

const Header = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="py-4">
      <div className="container">
        <div className="flex justify-between items-center gap-2">
          <img src="/images/SVCClogo.png" className="w-20 sm:w-24" />
          <h1 className="sm:font-bold text-sm font-semibold text-ls header-title ">
            Sillcon vally Code Camp
          </h1>
          <div className="flex gap-2 items-center">
            <h4 className="hidden sm:block">Hello Mr. Smith</h4>
            <span className="shadow-md sm:p-2 p-1 border-2 border-gray-100">
              <a
                href="#"
                className="text-blue-400 font-normal text-xs sm:font-semibold sm:text-md"
              >
                Sign-out
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
