import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import BeyondCode from "./components/BeyondCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Shorter loading time to get user straight into the experience
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-surface text-text-primary min-h-screen selection:bg-accent/20 selection:text-text-primary font-sans overflow-x-hidden noise-overlay">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#FDFAF4",
            color: "#35322B",
            border: "1px solid #DFD6C5",
            borderRadius: "8px",
          },
        }}
      />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <CustomCursor />
          <Navbar />
          <SocialSidebar />

          <main className="flex flex-col gap-12 md:gap-24 pb-20">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <CodingProfiles />
            <BeyondCode />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}