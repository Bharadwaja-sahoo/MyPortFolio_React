import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  // const [loading, setLoading] = useState(true);

  // // useEffect(() => {
  // //   setTimeout(() => setLoading(false), 2000);
  // // }, []);
  // useEffect(() => {
  //   document.body.classList.add("loading");
    
  //   const handleLoad = () => {
  //     setLoading(false);
  //     document.body.classList.remove("loading");
  //   };

  //   window.addEventListener("load", handleLoad);

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);

  // if (loading) return <Loader />;
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // show loader on route change

    const handleLoad = () => {
      setLoading(false); // hide loader when page fully loads
    };

    // Wait for React + assets
    window.addEventListener("load", handleLoad);

    // Simulate minimal delay (optional: prevents loader flashing too fast)
    const timer = setTimeout(() => setLoading(false), 800);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [location]); // run every time route changes

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