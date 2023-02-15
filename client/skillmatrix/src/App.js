import React from "react";
import Home from './pages/user/UserHome.js'
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
      
  );
}

export default App;
