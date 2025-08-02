import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";
import "./components/EmployeeList.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>User Record Table</h1>
        <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
