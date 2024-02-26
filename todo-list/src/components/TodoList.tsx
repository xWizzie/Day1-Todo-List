import { useState } from "react";

function TodoList() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, value]);
          setValue("");
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
