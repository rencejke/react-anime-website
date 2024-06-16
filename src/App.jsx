// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Page Example **/}
        <Route path="/" element={<Home />} />
        {/* Not Found Page Uses **/}
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Router>
  );
}
export default App;