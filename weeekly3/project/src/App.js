import { Provider } from "react-redux";
import store from "./store";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailDestination from "./pages/DetailDestination";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/detail/:id" element={<DetailDestination />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
