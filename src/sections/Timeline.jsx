import React from "react";
import "./css/timeline.css";

const Timeline = () => {
  return (
    <>
      <section id="timeline-section">
        <div className="container">
          <h2 className="heading hero_text text-center mb-5" data-aos="fade-up">
            Work Experience
          </h2>
          <div id="timeline" aria-labelledby="timeline-title">
            <h2 id="timeline-title" className="visually-hidden">
              Timeline
            </h2>
            <ol className="timeline-list">
              <li className="timeline-entry">
                <h3 className="title">Internship on UI Designer</h3>
                <p>Compugraph Softtech Solution PVT. LTD, BBSR, Odisha</p>
                <div className="svg d-flex justify-content-between">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    fill="currentColor"
                  >
                    <path d="M4 2h2v20H4V2zm4 2h12l-4 6 4 6H8V4z" />
                  </svg>
                  <p>2024 JUN - 2025 JAN</p>
                </div>
              </li>

              <li className="timeline-entry">
                <h3 className="title">UI Designer</h3>
                <p>Compugraph Softtech Solution PVT. LTD, BBSR, Odisha</p>
                <div className="svg d-flex justify-content-between">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    fill="currentColor"
                  >
                    <path d="M8.7 16.3 4.4 12l4.3-4.3-1.4-1.4L1.6 12l5.7 5.7 1.4-1.4zm6.6 0 4.3-4.3-4.3-4.3 1.4-1.4 5.7 5.7-5.7 5.7-1.4-1.4z" />
                  </svg>
                  <p>2025 JUN - Continue...</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
