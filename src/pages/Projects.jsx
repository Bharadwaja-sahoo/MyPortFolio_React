import React from 'react'
import Project_section from '../sections/Project_section'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Lets_Connect from '../sections/Lets_Connect'
import Dibba from '../components/Dibba'
import { Helmet } from "react-helmet-async";

const Projects = () => {
  useEffect(() => {
      // Simulate waiting for images/animations (or actually preload if needed)
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event("routeContentReady"));
      }, 500); // Short delay for mount + animations
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      <Helmet>
        <title>Bharadwaja Sahoo : Projects</title>
      </Helmet>
    <main className="content">
      <Navbar />
      <Dibba />
      <Project_section />
      <Lets_Connect />
      <Footer />
    </main>
    </>
  )
}

export default Projects