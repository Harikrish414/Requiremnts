import "@/index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/index.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Placeholder routes for future implementation */}
        <Route
          path="/forgot-password"
          element={<div className="p-8 text-center">Forgot Password Page (Coming Soon)</div>}
        />
        <Route
          path="/signup"
          element={<div className="p-8 text-center">Sign Up Page (Coming Soon)</div>}
        />
      </Routes>
    </Router>
  );
};

export default App;
