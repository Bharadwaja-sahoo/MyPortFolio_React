import React from 'react'
import Project_section from '../sections/Project_section'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Lets_Connect from '../sections/Lets_Connect'
import Dibba from '../components/Dibba'
import { Helmet } from "react-helmet-async";

const Projects = () => {
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