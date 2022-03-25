import styles from "./styles.module.scss";

const Card = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
