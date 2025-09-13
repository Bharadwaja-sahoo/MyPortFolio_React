import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Skill_Section from '../sections/Skill_Section'
import Resume_Section from '../sections/Resume_Section'
import Lets_Connect from '../sections/Lets_Connect'
import { Helmet } from "react-helmet-async";
import Timeline from '../sections/Timeline'

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Bharadwaja Sahoo : Skills</title>
      </Helmet>
    <main className="content">
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <Timeline />
      <Skill_Section />
      <Resume_Section />
      <Lets_Connect />
      <Footer />
    </main>
    </>
  )
}

export default Skills