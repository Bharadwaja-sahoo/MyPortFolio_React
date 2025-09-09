import React from 'react'
import Navbar from '../components/Navbar'
import ProfileImg from "../assets/Images/profile.jpg";

const About_Section = () => {
  return (
      <section className="about-section" style={{ overflow: "hidden" }}>
        {/* About start */}
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center"
              data-aos="fade-right"
            >
              <div className="about-img">
                <img src={ProfileImg} alt="Profile" />
              </div>
            </div>

            {/* Text Section */}
            <div className="col-md-6 about-text" data-aos="fade-left">
              <h1 className="hero_text text-center heading mb-4">About Me</h1>

              <p className="hero_text">
                I have completed my Bachelor of Technology in Mechanical Engineering from Biju Patnaik University, Odisha, India. Over time, I have developed a strong interest in UI/UX design and web technologies, allowing me to work with HTML5, CSS, JavaScript, React.js, and .NET UI.
              </p>

              <p className="hero_text">
                I am currently working as a UI Designer, where I work extensively with .NET UI components and gain hands-on experience in building interactive user interfaces. I also contribute to several projects, collaborating with teams to design and develop engaging digital experiences.
              </p>

              {/* Optional paragraph (commented in original HTML) */}
              {/*
              <p className="hero_text">
                I was born and brought up in Dhenkanal, Odisha, a small yet beautiful town. My parents have always been my biggest support system—my father runs a Business, and my mother manages domestic work. Being their only child, I deeply appreciate their hard work and sacrifices, which have shaped me into who I am today.
              </p>
              */}

              <p className="hero_text">
                Beyond coding and designing, I have a passion for cricket, traveling, and watching movies. Exploring new places and learning new technologies always excites me, and I continuously strive to improve my skills and stay updated with the latest trends in Web development.
              </p>

              <p className="hero_text">That’s all about me! 🚀</p>
            </div>
          </div>
        </div>
        {/* About end */}
      </section>
  )
}

export default About_Section