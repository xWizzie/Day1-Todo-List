import { useState } from "react";

function TodoList() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    setTodos((prevTodos) => [...prevTodos, value]);
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-50">
      <form
        className="input-group input-group-lg p-1 pt-3 sticky-top"
        onSubmit={handleSubmit}
      >
        <span className="input-group-text">To do:</span>
        <input
          className="form-control"
          type="text"
          onChange={handleChange}
          value={value}
        />
        <button type="submit" className="btn btn-primary">
          Add task
        </button>
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

            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center flex-shrink-1 pe-3">
                <p className="m-0 px-3 text-light fs-4">Completed:</p>
                <input className="form-check-input" type="checkbox" />
              </div>

              <button
                className="btn btn-danger flex-shrink-1 m-1"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
