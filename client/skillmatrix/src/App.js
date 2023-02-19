import React from "react";
import SkillTable from "./pages/admin/AdminSkill.js";
import Sidebar from "./components/Sidebar.js";
import "./pages/style/AdminSkill.css";
import Home from './pages/user/UserHome.js';
import { Routes, Route, Link } from 'react-router-dom';
import Register from "./pages/common/Registration.js";
import LoginHandler from './pages/common/Login.js';

function App() {
  return (
    <div>
      <div className="maindiv">
        <Sidebar className="sidebar" />
        <div className="tablediv">
          <SkillTable />
        </div>
      </div>
    </div>
  );
}
export default App;