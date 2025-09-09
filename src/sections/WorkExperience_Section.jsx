import React from 'react'
import img1 from "../assets/Images/company.png";

const WorkExperience_Section = () => {
  return (
      <section className="exp-section">
        {/* Work Experience start */}
        <h2 className="heading hero_text text-center mb-4" data-aos="fade-up">
          Work Experience
        </h2>
        <div className="container" data-aos="fade-up">
          <div className="line hero_text">
            <div className="companyimg">
              <a
                href="https://www.compugraphs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img1} alt="Compugraph Softtech Solution" />
              </a>
            </div>
            <div className="linediv">
              <h1>Compugraph Softtech Solution PVT. LTD, BBSR, Odisha</h1>
            </div>
            <pre>
              Internship On UI Designer{"\n"}/ 2024 JUN - 2025 JAN
            </pre>
          </div>
        </div>
        <div className="container mt-5 mb-5" data-aos="fade-up">
          <div className="line hero_text">
            <div className="companyimg">
              <a
                href="https://www.compugraphs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img1} alt="Compugraph Softtech Solution" />
              </a>
            </div>
            <div className="linediv">
              <h1>Compugraph Softtech Solution PVT. LTD, BBSR, Odisha</h1>
            </div>
            <pre>
              UI Designer{"\n"}/ 2025 JUL - CONTINUE...
            </pre>
          </div>
        </div>
        {/* Work Experience end */}
      </section>
  )
}

export default WorkExperience_Section