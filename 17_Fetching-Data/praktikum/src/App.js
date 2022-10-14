import { Provider } from "react-redux";
import store from "./store";
import TodoApp from "./pages/ToDoApp";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoApp className="loader" />
      </Provider>
    </>
  );
}

export default App;
