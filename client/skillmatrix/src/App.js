
import React from "react";
// Import Pages and Layout.
import Home from './pages/user/UserHome.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificateList from "./pages/admin/CertificatePage";
import ReportList from "./pages/admin/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/admin/certificate" element={<CertificateList/>}></Route>
         <Route path="/admin/report" element={<ReportList/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
