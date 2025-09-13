import React, { useEffect, useRef } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typed from "typed.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skill_Section from "../sections/Skill_Section";
import Project_section from "../sections/Project_section";
import Resume_Section from "../sections/Resume_Section";
import Intro_Section from "../sections/Intro_Section";
import About_Section from "../sections/About_Section";
import WorkExperience_Section from "../sections/WorkExperience_Section";
import Lets_Connect from "../sections/Lets_Connect";
import { Helmet } from "react-helmet";
import img1 from "../assets/Images/1.jpg";
import img2 from "../assets/Images/2.jpg";
import img3 from "../assets/Images/3.jpg";
import img4 from "../assets/Images/4.jpg";
import resumePDF from "../assets/Images/BHARADWAJA_Resume.pdf";
import Dibba100px from '../components/Dibba100px';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const typedRef = useRef(null); // Reference to the span

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['UI Designer', 'Front-End Developer', 'WebSite Designer', 'Mechanical Engineer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <main className="content">
      <Helmet>
        <title>Bharadwaja Sahoo : Portfolio</title>
      </Helmet>
      <Navbar />
      {/* Home start */}
      <section className="hero_section">
        <div className="container">
          <div className="row home">
            {/* Left text section */}
            <div className="home-div col-md-6 col-sm-12 d-flex flex-column align-items-start justify-content-center">
              <h1 className="hero_text" data-aos="fade-up" data-aos-delay="100">
                Hi...!!!
              </h1>
              <h1
                className="mb-4 hero_text"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ fontSize: "50px" }}
              >
                I'm <span id="name">Bharadwaja Sahoo</span>...
              </h1>
              <p
                className="mb-4 hero_text"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ height: "40px" }}
              >
                I am a <span id="typed" ref={typedRef}></span> with a passion for building user friendly sites.
              </p>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
                <button 
                  className="btns" 
                  id="links1" 
                  onClick={() => window.open("https://github.com/Bharadwaja-sahoo", "_self")}>
                  <i className="font-with-icon fa-brands fa-github pe-1"></i> GitHub
                </button>
                <button className="btns ms-3" id="links2"
                  onClick={() => window.open(resumePDF, "_self")}
                >
                  <i className="font-with-icon fa-regular fa-file pe-1"></i> View CV
                </button>
              </div>
            </div>

            {/* Right images section */}
            <div className="home-div col-md-6 col-sm-12 d-flex align-items-center">
              <div id="imgdiv" data-aos="fade-up">
                <div id="img1" className="img-div">
                  <img src={img1} alt="1" />
                </div>
                <div id="img2" className="img-div">
                  <img src={img2} alt="2" />
                </div>
                <div id="img3" className="img-div">
                  <img src={img3} alt="3" />
                </div>
                <div id="img4" className="img-div">
                  <img src={img4} alt="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home end */}
      <Intro_Section />
      <About_Section />
      <Dibba100px />
      <WorkExperience_Section />
      <Skill_Section />
      <Project_section />
      <Resume_Section />
      <Lets_Connect />
      <Footer />
    </main>
  )
}

export default Home