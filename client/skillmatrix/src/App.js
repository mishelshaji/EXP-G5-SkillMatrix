import React from "react";
// import Home from './pages/user/UserHome.js'
import Navbar from './components/navbar/Navbar.js'
import LandingPage from "./pages/common/landingpage/LandingPage.js";
import LoginHandler from './pages/common/Login.js';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <LoginHandler/>
    </div>
  );
}
export default App;