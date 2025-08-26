import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
} from "../redux/slices/counter/todoSlice/todoSlice.js";
import { useRef,useEffect } from "react";



function TodoList() {
const focusRef=useRef(null)
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

 useEffect(() => {
    
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };
  return (
    <div className="container">
      <h2 className="title">📝 Redux Todo App</h2>

      {/* Add Form */}
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          ref={focusRef}
          placeholder="Enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-btn" type="submit">Add</button>
      </form>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {editId === todo.id ? (
              <>
                {/* Edit Mode */}
                <input
                  className="input"
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="add-btn"
                  onClick={() => handleUpdate(todo.id)}
                >
                  Save
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    setEditId(null);
                    setEditText("");
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {/* Normal Mode */}
                <span
                  className={`todo-text ${todo.completed ? "completed" : ""}`}
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.text}
                </span>
                <button
                  className="add-btn"
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  ✏️ Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  ❌
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
