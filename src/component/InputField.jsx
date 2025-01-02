import { useState } from "react";
import styles from "./InputField.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../reduxStore/slices";

const InputField = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const saveTodo = () => {
    if (!todo) {
      alert("Please enter a todo");
    } else if (todo.length < 5) {
      alert("Todo should be atleast 5 characters long");
    } else {
      dispatch(addTodo(todo));
      setTodo("");
      window.location.reload();
    }
  };
  return (
    <div className={styles.InputFieldContainer}>
      <input
        type="text"
        placeholder="Enter todo here"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
};

export default InputField;
