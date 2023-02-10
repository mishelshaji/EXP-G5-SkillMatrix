import React from "react";
// import Home from './pages/user/UserHome.js'
import Navbar from './components/navbar/Navbar.js'
import LandingPage from "./pages/common/landingpage/LandingPage.js";

function App() {
  return (
    //  <Home/> 
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
