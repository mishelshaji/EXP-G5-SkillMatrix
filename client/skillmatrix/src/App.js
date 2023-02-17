
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificateList from "./pages/admin/certificate/CertificatePage";
import ReportList from "./pages/admin/report/ReportPage";
import Home from "../src/pages/user/UserHome.js";
import SkillPage from "./pages/admin/skillpage/SkillPage";
import AdminHome from "./pages/admin/home/AdminHome";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
         <Route path="/admin/home" element={<AdminHome/>}></Route>
         <Route path="/admin/certificate" element={<CertificateList/>}></Route>
         <Route path="/admin/report" element={<ReportList/>}></Route>
         <Route path="/admin/skill" element={<SkillPage/>}></Route>
         <Route path="/admin/about" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
