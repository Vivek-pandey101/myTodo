import { useState } from "react";
import myContext from "./MyContext";
// import { useNavigate } from "react-router-dom";

function MyState(props) {
  const [theme, setTheme] = useState("light");
  const [trueTheme, setTrueTheme] = useState(false);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setTrueTheme(false);
    } else {
      setTheme("light");
      setTrueTheme(true);
    }
  };
  return (
    <myContext.Provider value={{ changeTheme, trueTheme, theme }}>
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
