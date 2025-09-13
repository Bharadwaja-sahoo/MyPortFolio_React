import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading (e.g., fetching data, loading assets)
    const loadContent = async () => {
      // You can replace this with actual logic to check if content (e.g., images, API data) is loaded
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated 2-second delay
      setIsLoading(false);
    };

    loadContent();
  }, []);
  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      )}
    </>
  );
}

export default App;