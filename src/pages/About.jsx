import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Intro_Section from '../sections/Intro_Section'
import About_Section from '../sections/About_Section'
import Lets_Connect from '../sections/Lets_Connect'
import Dibba from '../components/Dibba'

function About() {
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
        <title>Bharadwaja Sahoo : About</title>
      </Helmet>
    <main className="content">
      <Navbar />  
      <Dibba />     
      <Intro_Section/>
      <About_Section />
      <Lets_Connect />
      <Footer />
    </main>
    </>
  )
}

export default About