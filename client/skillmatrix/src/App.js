import React from "react";
import SkillTable from "./pages/admin/AdminSkill.js";
import Sidebar from "./components/Sidebar.js";
import "./pages/style/AdminSkill.css";

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
