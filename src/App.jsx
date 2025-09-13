import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    setLoading(true); // Show loader on route change (including initial)
    document.body.classList.add("loading"); // Prevent scroll during load

    const hideLoader = () => {
      setLoading(false);
      document.body.classList.remove("loading");
    };

    // Listen for full page load (for initial load only)
    const handleLoad = () => {
      hideLoader();
    };
    window.addEventListener("load", handleLoad);

    // Fallback timeout for route changes (simulates "content load" delay)
    // Adjust 2000ms as needed based on your content heaviness
    const timer = setTimeout(hideLoader, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
      document.body.classList.remove("loading"); // Cleanup if unmounting
    };
  }, [location]); // Re-run on every route change

  if (loading) return <Loader />;

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;