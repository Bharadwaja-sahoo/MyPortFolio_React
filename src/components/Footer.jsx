import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr style={{ padding: "1px", margin: "0 0" }} />
      {/* Footer start */}
      <footer className="footer-section">
        <div className="container pt-5">
          <div className="row pb-5 pt_80 bottom_line position-relative">
            {/* Logo & Copyright */}
            <div className="col-xl-3">
              <ul className="flex-column mb-5 mb-xl-0">
                <li className="list-unstyled mb-3 text-center">
                  <div className="footlogo logo p-4">
                    <h2>Bharadwaja Sahoo</h2>
                    <h2>Bharadwaja Sahoo</h2>
                  </div>
                </li>
                <li className="copyright list-unstyled text_rev">
                  © 2024-2025 All Rights Reserved. <br />
                  Designed by <span className="fw-bold">Bharadwaja Sahoo</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3">
              <ul className="flex-column">
                <li className="mb-4 list-unstyled">
                  <span className="text_rev d-block footer-title fs-17 pb-2">
                    Contact Me
                  </span>
                </li>
                <li className="list-unstyled">
                  <a
                    href="mailto:bharadwajasahoo96@gmail.com"
                    className="text-decoration-none lh-30 text_rev"
                  >
                    <span className="arrow me-2">→</span>
                    bharadwajasahoo96@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-md-3">
              <ul className="flex-column">
                <li className="mb-4 list-unstyled">
                  <span className="d-block footer-title fs-17 pb-2 text_rev">
                    Useful Links
                  </span>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/"
                    className="text-decoration-none text_rev lh-30"
                  >
                    <span className="arrow me-2">→</span>Home
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/about"
                    className="text-decoration-none text_rev lh-30"
                  >
                    <span className="arrow me-2">→</span>About Us
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/skills"
                    className="text-decoration-none text_rev lh-30"
                  >
                    <span className="arrow me-2">→</span>Skills
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/projects"
                    className="text-decoration-none text_rev lh-30"
                  >
                    <span className="arrow me-2">→</span>Projects
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/contact"
                    className="text-decoration-none text_rev lh-30"
                  >
                    <span className="arrow me-2">→</span>Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-md-3">
              <ul className="flex-column">
                <li className="mb-4 list-unstyled text_rev">
                  <span className="d-block footer-title fs-17 pb-2">
                    Social Links
                  </span>
                </li>
                <ul className="d-flex list-unstyled mt-4">
                  <li>
                    <a
                      className="align-items-center d-flex justify-content-center me-2 text-decoration-none hero_text social_icon"
                      href="https://www.facebook.com/bharadwajasahoo.ricku.9"
                      rel="nofollow"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="align-items-center d-flex justify-content-center me-2 text-decoration-none hero_text social_icon"
                      href="https://www.instagram.com/rick_u_/"
                      rel="nofollow"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="align-items-center d-flex justify-content-center me-2 text-decoration-none hero_text social_icon"
                      href="https://www.linkedin.com/in/bharadwaja-s-361369257/"
                      rel="nofollow"
                      title="Linkedin"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="align-items-center d-flex justify-content-center me-2 text-decoration-none hero_text social_icon"
                      href="https://github.com/Bharadwaja-sahoo"
                      rel="nofollow"
                      title="Github"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="align-items-center d-flex justify-content-center me-2 text-decoration-none hero_text social_icon"
                      href="https://www.youtube.com/@rick_u_"
                      rel="nofollow"
                      title="Youtube"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end */}
    </>
  );
}

export default Footer