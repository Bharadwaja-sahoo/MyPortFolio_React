import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Skill_Section from '../sections/Skill_Section'
import Resume_Section from '../sections/Resume_Section'
import Lets_Connect from '../sections/Lets_Connect'
import WorkExperience_Section from '../sections/WorkExperience_Section'
import { Helmet } from "react-helmet-async";

const Skills = () => {
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
        <title>Bharadwaja Sahoo : Skills</title>
      </Helmet>
    <main className="content">
      <Navbar />
      <div style={{ height: "130px" }}></div>
      <WorkExperience_Section />
      <Skill_Section />
      <Resume_Section />
      <Lets_Connect />
      <Footer />
    </main>
    </>
  )
}

export default Skills