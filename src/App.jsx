// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TrendingPage from "./components/pages/TrendingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Page Example **/}
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingPage />} />
        {/* Not Found Page Uses **/}
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Router>
  );
}
export default App;