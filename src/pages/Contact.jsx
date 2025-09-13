import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Lets_Connect from '../sections/Lets_Connect'
import { Helmet } from "react-helmet-async";

const Contact = () => {
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
        <title>Bharadwaja Sahoo : Contact</title>
      </Helmet>
    <main className="content">
      <Navbar />
      <Lets_Connect />
      <Footer />
    </main>
    </>
  )
}

export default Contact