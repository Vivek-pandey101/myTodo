import imageOne from "../../images/bg-desktop-light.jpg";
import imageTwo from "../../images/bg-desktop-dark.jpg";
import imageThree from "../../images/bg-mobile-light.jpg";
import imageFour from "../../images/bg-mobile-dark.jpg";
import { FaRegMoon } from "react-icons/fa";
import { PiSun } from "react-icons/pi";
import styles from "./Home.module.css";
import InputField from "./InputField";
import Todos from "./Todos";
import { useContext } from "react";
import myContext from "../context/MyContext";
import Footer from "./Footer";

const Home = () => {
  const { changeTheme, trueTheme, theme } = useContext(myContext);
  return (
    <div
      className={theme === "light" ? styles.Container : styles.ContainerDark}
    >
      <div className={styles.Homecontainer}>
        {trueTheme ? (
          <>
            <img
              src={imageOne}
              className={styles.desktop}
              alt="Light Backgroud Image"
            />
            <img
              src={imageThree}
              className={styles.mobile}
              alt="Light Backgroud Image"
            />
          </>
        ) : (
          <>
            <img
              src={imageTwo}
              className={styles.desktop}
              alt="Dark Backgroud Image"
            />
            <img
              src={imageFour}
              className={styles.mobile}
              alt="Dark Backgroud Image"
            />
          </>
        )}
        <div className={styles.Homecontent}>
          <p>TODO</p>
          {trueTheme ? (
            <span onClick={changeTheme}>
              <FaRegMoon size={25} />
            </span>
          ) : (
            <span onClick={changeTheme}>
              <PiSun size={25} />
            </span>
          )}
        </div>
      </div>
      <div className={styles.Inputcontainer}>
        <InputField />
      </div>
      <div>
        <Todos />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
