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
import { AnimatePresence, motion } from "framer-motion";
function App() {

  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  const pageMotion = {
    initial: { opacity: 0, y: 10, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -10, filter: "blur(6px)" },
  };

 return (
    <div>
    {!isOwnerPath && <Navbar />}
    <div className="min-h-[70vh]">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageMotion} transition={{ duration: 0.35, ease: "easeOut" }}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div {...pageMotion} transition={{ duration: 0.35, ease: "easeOut" }}>
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/rooms"
            element={
              <motion.div {...pageMotion} transition={{ duration: 0.35, ease: "easeOut" }}>
                <AllRooms />
              </motion.div>
            }
          />
          <Route
            path="/rooms/:id"
            element={
              <motion.div {...pageMotion} transition={{ duration: 0.35, ease: "easeOut" }}>
                <RoomDetails />
              </motion.div>
            }
          />
          <Route
            path="/Experience"
            element={
              <motion.div {...pageMotion} transition={{ duration: 0.35, ease: "easeOut" }}>
                <ExperiencePage />
              </motion.div>
            }
          />
          <Route
            path="/About"
            element={
              <motion.div {...pageMotion} transition={{ duration: 0.35, ease: "easeOut" }}>
                <About />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
    <div>
      <Footer />
    </div>
    </div>
   );
 }
export default App