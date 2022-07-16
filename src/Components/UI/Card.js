import styles from "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div className={classes} style={styles}>
      {props.children}
    </div>
  );
};

export default Card;
