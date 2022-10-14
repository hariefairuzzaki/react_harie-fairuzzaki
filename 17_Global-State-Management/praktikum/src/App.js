import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import TodoApp from "./pages/ToDoApp";

function App() {
  return (
    <div className="text">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoApp />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
