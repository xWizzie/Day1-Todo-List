import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      className="container-fluid d-flex justify-content-center bg-dark min-vh-100 min-vw-75
    "
    >
      <TodoList />
    </div>
  );
}

export default App;
