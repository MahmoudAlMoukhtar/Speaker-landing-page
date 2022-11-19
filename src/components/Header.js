import {ThemeContext} from "./Layout";
import {useContext} from "react";

const Header = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="py-4">
      <div className="container">
        <div className="flex justify-between">
          <img src="/images/SVCClogo.png" />
          <h1 className="font-bold text-ls header-title">
            Sillcon vally Code Camp
          </h1>
          <div>
            Hello Mr. Smith &nbsp;&nbsp;
            <span className="shadow-md p-2 border-2 border-gray-100">
              <a href="#" className="text-blue-400 font-semibold">
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
