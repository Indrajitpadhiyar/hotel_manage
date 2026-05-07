import React from "react";
import Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import ExperiencePage from "./pages/ExperiencePage";
import About from "./pages/About";
function App() {

  const isOwnerPath = useLocation().pathname.includes("owner");

 return (
    <div>
    {!isOwnerPath && <Navbar />}
    <div className="min-h-[70vh]">
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/rooms" element={<AllRooms />} />
  <Route path="/rooms/:id" element={<RoomDetails />} />
  <Route path="/Experience" element={<ExperiencePage />} />
  <Route path="/About" element={<About />} />
 </Routes>
    </div>
    <div>
      <Footer />
    </div>
    </div>
   );
 }
export default App