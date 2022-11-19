import {createContext} from "react";
import useTheme from "./hooks/useTheme";

export const ThemeContext = createContext();

function Layout({startingTheme, children}) {
  const {theme, setTheme} = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div
        className={
          theme === "light"
            ? "container mx-auto "
            : " px-10 bg-gray-700 text-white"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
