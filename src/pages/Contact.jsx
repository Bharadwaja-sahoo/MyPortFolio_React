import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Lets_Connect from '../sections/Lets_Connect'
import { Helmet } from "react-helmet-async";

const Contact = () => {
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