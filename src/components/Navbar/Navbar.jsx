import styles from "./styles.module.scss";

const Navbar = ({ planets }) => {
  return (
    <header className={styles.nav}>
      <a href="#">
        <h1>The Planets</h1>
      </a>
      <ul>
        {planets.map((planet) => {
          return (
            <a href="#">
              <li>{planet.name}</li>
            </a>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
