import { datas } from "./mockData";
import TodoPage from "./pages/todoPage/TodoPage";

function App() {
  return (
    <div>
      <TodoPage data={datas} />
    </div>
  );
}

export default App;
