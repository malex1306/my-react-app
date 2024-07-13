import React from "react";
import Home from "./pages/home/Home.jsx";
import TopBar from "./components/topbar/TopBar.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";




function App() {
  return (
  <>
   <TopBar />
   <Settings/>
  </>
  );
}

export default App;