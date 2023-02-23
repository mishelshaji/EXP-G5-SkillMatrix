
import React from "react";
import { BrowserRouter, Routes, Route,Link, createBrowserRouter } from "react-router-dom";
import CertificateList from "./pages/admin/certificate/CertificatePage";
import ReportList from "./pages/admin/report/ReportPage";
import Home from "../src/pages/user/UserHome.js";
import SkillPage from "./pages/admin/skillpage/SkillPage";
import AdminHome from "./pages/admin/home/AdminHome";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import SkillTable from "./pages/admin/AdminSkill.js"
import LoginHandler from "./pages/common/Login";
import Register from "./pages/common/Registration";
import Comp from "./comp";
import AdminGuard from "./components/AdminProtectGuard";
import RequestInterceptor from "./service/requestInterceptor";

const routes = createBrowserRouter([
  {path: '/', element: <LoginHandler/>},
  {path: '/register', element: <Register/>},
  // {path: '/admin', element: <}
])

function App() {
  return (
    <BrowserRouter>
    <RequestInterceptor/>
      <Routes> 
        <Route path="/" element={<LoginHandler />}></Route>
        <Route path="/test" element={<Comp />}></Route>

        <Route path="/Register" element={<Register />}></Route>
        <Route path="/user/home" element={<Home/>}></Route>
         {/* <Route path="/admin/home" element={<AdminHome/>}></Route>
         <Route path="/admin/certificate" element={<CertificateList/>}></Route> */}
         {/* <Route path="/admin/report" element={<ReportList/>}></Route>
         <Route path="/admin/skill" element={<SkillPage/>}></Route>
         <Route path="/admin/userstable" element={<SkillTable/>}></Route>
         <Route path="/admin/about" element={<PageNotFound/>}></Route> */}

         <Route
          path="/admin"
          element={
          <AdminGuard></AdminGuard>}>
            <Route path="home" element={<AdminHome />} />
            <Route path="report" element={<ReportList/>}></Route>
            <Route path="skill" element={<SkillPage/>}></Route>
            <Route path="userstable" element={<SkillTable/>}></Route>
            <Route path="about" element={<PageNotFound/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;