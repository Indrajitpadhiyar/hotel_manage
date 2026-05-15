import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import ExperiencePage from "./pages/ExperiencePage";
import About from "./pages/About";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");
  const isLoginPath = location.pathname === "/login";

  const pageMotion = {
    initial: { opacity: 0, y: 12, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -12, filter: "blur(8px)" },
  };

  return (
    <div className="overflow-x-hidden">
      {!isOwnerPath && !isLoginPath && <Navbar />}
      <div className="min-h-[70vh]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div {...pageMotion} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                <Home />
              </motion.div>
            } />
            <Route path="/login" element={
              <motion.div {...pageMotion} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                <Login />
              </motion.div>
            } />
            <Route path="/rooms" element={
              <motion.div {...pageMotion} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                <AllRooms />
              </motion.div>
            } />
            <Route path="/rooms/:id" element={
              <motion.div {...pageMotion} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                <RoomDetails />
              </motion.div>
            } />
            <Route path="/Experience" element={
              <motion.div {...pageMotion} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                <ExperiencePage />
              </motion.div>
            } />
            <Route path="/About" element={
              <motion.div {...pageMotion} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                <About />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
      {!isOwnerPath && !isLoginPath && <Footer />}
    </div>
  );
}

export default App;