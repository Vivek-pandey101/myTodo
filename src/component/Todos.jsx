import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import styles from "./Todos.module.css";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../reduxStore/slices";
import myContext from "../context/MyContext";

const Todos = () => {
  const { theme } = useContext(myContext);
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [edit, setEdit] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodoData(todos);
  }, []);

  const deleteTodo = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (!isConfirmed) return;
    dispatch(removeTodo(index));
    window.location.reload();
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEdit(todoData[index]);
  };

  const saveEdit = () => {
    if (editIndex !== null) {
      dispatch(editTodo({ index: editIndex, newText: edit }));
      const updatedTodos = [...todoData];
      updatedTodos[editIndex] = edit;
      setTodoData(updatedTodos);
      endEditing();
    }
  };

  const endEditing = () => {
    setEditIndex(null);
    setEdit(false);
  };

  return (
    <div className={styles.TodosContainer}>
      <ul className={theme === "light" ? "" : styles.todosDark}>
        {todoData.length === 0 ? (
          <div className={styles.noTodos}>
            <p>No todos available. Please add some!</p>
          </div>
        ) : (
          todoData.map((todo, index) => (
            <li key={index}>
              {editIndex === index ? (
                <input
                  className={styles.editField}
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
              ) : (
                <>
                  <p className={theme === "light" ? "" : styles.todoDark}>
                    {index + 1}. {todo}
                  </p>
                </>
              )}
              <div>
                {editIndex !== index ? (
                  <button
                    className={styles.edit}
                    onClick={() => startEditing(index)}
                  >
                    <FaEdit size={20} />
                  </button>
                ) : (
                  <button
                    className={styles.edit}
                    style={{ color: "green" }}
                    onClick={() => saveEdit(index, edit)}
                  >
                    <FaCheck size={20} />
                  </button>
                )}
                {editIndex !== index ? (
                  <button
                    className={styles.delete}
                    onClick={() => deleteTodo(todo)}
                  >
                    <FaTrash size={20} />
                  </button>
                ) : (
                  <button
                    className={styles.delete}
                    onClick={() => endEditing()}
                  >
                    <FaXmark size={20} />
                  </button>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todos;
