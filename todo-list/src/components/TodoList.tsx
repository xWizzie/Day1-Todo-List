import { useState } from "react";

function TodoList() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form
        className="input-group input-group-lg p-1 sticky-top"
        onSubmit={(e) => {
          e.preventDefault();
          if (!value) return;
          setTodos([...todos, value]);
          setValue("");
        }}
      >
        <span className="input-group-text">Add Todo:</span>
        <input
          className="form-control "
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </form>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="d-flex justify-content-between align-items-center p-1"
          >
            <p className="d-flex align-items-center fs-3 m-1 text-light">
              {todo}
            </p>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
