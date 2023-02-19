import React from "react";
import Home from './pages/user/UserHome.js';
import SkillTable from "./pages/admin/AdminSkill.js";
import Sidebar from "./components/Sidebar.js";
import './pages/style/AdminSkill.css'
import PopupAdd from "./components/PopupAdd.js";
import PopupDelete from "./components/PopupDelete.js";
function App() {
  return (
    <div>
      <PopupDelete element = "jomet" name = "skill" />
    <PopupAdd element="sifana" header="add skill" btnName="Add"/>
    <div className="maindiv">
      
    <Sidebar className="sidebar"/>
    <div className="tablediv">
     <SkillTable/> 
     </div>
     </div>
     </div>
  );
}

export default App;
