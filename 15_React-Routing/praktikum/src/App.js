import TodoApp from "./pages/home/ToDoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutApp from "./pages/about/AboutApp";
import AboutAuthor from "./pages/about/AboutAuthor";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="about">
            <Route path="about-app" element={<AboutApp />} />
            <Route path="about-author" element={<AboutAuthor />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
