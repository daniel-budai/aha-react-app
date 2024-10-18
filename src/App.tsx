import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./pages/LandingPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/todos" element={<TodoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
