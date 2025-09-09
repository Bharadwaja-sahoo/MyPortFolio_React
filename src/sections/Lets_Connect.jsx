import React from 'react'

const Lets_Connect = () => {
  return (
    <>
        <section className="contact-section d-flex align-items-center justify-content-center flex-column">
        {/* Contack Start */}
        <h1
          className="text_rev text-center"
          style={{ fontFamily: "playfair", fontSize: "80px" }}
          data-aos="fade-up"
        >
          Let's <span className="spans-rev fst-italic">Connect</span>
        </h1>
        <p
          className="mt-3 mb-4 text-center text_rev"
          data-aos="fade-up"
        >
          Feel free to contact me if having any questions. I'm available for
          <br /> new projects or just chatting.
        </p>
        <a
          href="mailto:bharadwajasahoo96@gmail.com"
          className="buttons-rev text-decoration-none mb-4"
          data-aos="fade-up"
        >
          Connect With Me <i className="ri-arrow-right-up-line"></i>
        </a>
        {/* Contact End */}
      </section>
    </>
  )
}

export default Lets_Connect