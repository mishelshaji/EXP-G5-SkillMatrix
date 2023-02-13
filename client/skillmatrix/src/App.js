import React from "react";
import Home from './pages/user/UserHome.js';
import { Routes, Route, Link } from 'react-router-dom';
import Register from "./pages/common/Registration.js";

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path="/" element={<Register />} />
    </Routes>
  );
}

export default App;
