import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./views/search";
import MovieDetails from "./views/movieDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
