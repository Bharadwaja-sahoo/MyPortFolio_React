import React , { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/Images/resume/row-3.jpg";
import img2 from "../assets/Images/resume/row-3.jpg";
import img3 from "../assets/Images/resume/row-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Resume_Section = () => {
    useEffect(() => {
        const mm = gsap.matchMedia();
    
        mm.add("(max-width: 999px)", () => {
          return gsap.timeline({
            scrollTrigger: {
              trigger: "#resume-section",
              pin: true,
              start: "50% 50%",
              end: "150% 50%",
              scrub: true,
            }
          });
        });
    
        const resume = gsap.timeline({
          scrollTrigger: {
            trigger: "#resume-section",
            start: "10% 50%",
            end: "80% 50%",
            scrub: true,
          }
        });
    
        // Set initial state if needed
        gsap.set("#imgTwo, #imgThree", { rotateX: -90 });
    
        resume.to("#imgTwo", { rotateX: 0 })
              .to("#imgThree", { rotateX: 0 });
    
        return () => {
          mm.revert();
          resume.kill();
        };
      }, []);
  return (
      <section id="resume-section" className="d-flex align-items-center justify-content-center">
          {/* resume start */}
        <div className="resume d-flex align-items-center justify-content-center flex-column" style={{ gap: "0px !important" }}>
          <div id="imgOne" className="img">
            <img src={img1} alt="row-1" />
          </div>
          <div id="imgTwo" className="img">
            <img src={img2} alt="row-2" />
          </div>
          <div id="imgThree" className="img">
            <img src={img3} alt="row-3" />
          </div>
        </div>
        {/* resume end */}
      </section>
  )
}

export default Resume_Section