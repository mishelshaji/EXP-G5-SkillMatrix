import React from "react";
import Home from './pages/user/UserHome.js';
import { Routes, Route, Link } from 'react-router-dom';
import Register from "./pages/common/Registration.js";
import LoginHandler from './pages/common/Login.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginHandler/>} />
    </Routes>
  );
}
export default App;