import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMovie from "./pages/aboutMovie";

function App() {
  return (
    <div className="App dark:bg-gray-800 h-[100vh] overflow-y-hidden">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:id" Component={AboutMovie} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
