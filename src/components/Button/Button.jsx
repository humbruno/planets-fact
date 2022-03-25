import styles from "./styles.module.scss";
import { PlanetContext } from "../../context/PlanetContext";
import { useContext } from "react";

const Button = ({
  id,
  clickFunction,
  accentColor,
  desktopText,
  mobileText,
}) => {
  const { selected } = useContext(PlanetContext);

  return (
    <button
      type="button"
      className={
        selected === id ? `${styles.btn} ${styles.active}` : styles.btn
      }
      style={{ "--accentColor": accentColor }}
      onClick={clickFunction}
    >
      <span aria-hidden="true" className={styles.hiddenMobile}>
        0{id}
      </span>
      <span
        className={`${styles.hiddenDesktop} ${
          selected === id ? styles.mobileBorder : null
        }`}
      >
        {mobileText}
      </span>

      <span className={styles.hiddenMobile}> {desktopText}</span>
    </button>
  );
};

export default Button;
