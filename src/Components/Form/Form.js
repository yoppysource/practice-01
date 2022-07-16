import Card from "../UI/Card";
import styles from "./Form.css";

const Form = () => {
  return (
    <Card>
      <form className="form" style={styles}>
        <label>Username</label>
        <input type="text" />
        <label>Age(Year)</label>
        <input type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default Form;
