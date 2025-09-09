import React from 'react'

const Intro_Section = () => {
  return (
      <section id="motive" className="intro-section">
        {/* Big intro start */}
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <p className="hero_text">
            I'm <span className="spans fst-italic" data-aos="fade-down">Bharadwaja </span>
            <span id="onespan" data-aos="fade-up"></span> <br />
            an UI <span id="twospan" data-aos="fade-up"></span>
            <span className="spans fst-italic" data-aos="fade-down">Designer</span><br />
            <span className="spans fst-italic" data-aos="fade-down">Based </span> in Odisha
            <span id="threespan" data-aos="fade-up"></span>
          </p>

          <p className="hero_text text-center mb-4" data-aos="fade-up">
            I'm Doing this as a way to practice my design skills, explore <br /> different styles and have fun...
          </p>

          <a
            href="mailto:bharadwajasahoo96@gmail.com"
            className="buttons text-decoration-none mb-4"
            data-aos="fade-up"
          >
            Connect With Me <i className="ri-arrow-right-up-line"></i>
          </a>

          <div data-aos="fade-up">
            <a
              className="back text_rev social-links"
              href="https://www.facebook.com/bharadwajasahoo.ricku.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              className="back text_rev social-links mx-2"
              href="https://www.instagram.com/rick_u_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              className="back text_rev social-links"
              href="https://www.linkedin.com/in/bharadwaja-sahoo-361369257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        {/* Big intro end */}
      </section>
  )
}

export default Intro_Section