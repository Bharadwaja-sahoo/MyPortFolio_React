import React , { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill_Section = () => {
  useEffect(() => {
      let tl = gsap.timeline({
      scrollTrigger: {
          trigger: '.main-section',
          pin: true,
          start: '50% 50%',
          end: '200% 50%',
          scrub: true,
          // markers: true,
      }});
      tl.to("#gsap",{ opacity: 1, filter: "blur(0px)" })
      .to("#ajax",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#sql",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#mongo",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#tailwind",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#bootstrap",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#git",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#github",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#html",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#css",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#javascript",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#react",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#net",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#node",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#express",{ opacity: 1, filter: "blur(0px)", delay: -0.3 })
      .to("#jquery",{ opacity: 1, filter: "blur(0px)", delay: -0.3 });
  
      return () => {
        tl.kill(); // Remove timeline to prevent memory leaks
      };
    }, []);
  return (
    <section className="skill-section">
        {/* Skill start */}
        <div className="main-section d-flex align-items-center justify-content-center flex-column">
          <h1 className="mb-5 hero_text heading" data-aos="fade-up">
            Skills
          </h1>
          <div className="skills d-flex align-items-center justify-content-center">
            <h2 className="hero_text skill_h2" id="react">
              <i className="ri-reactjs-fill"></i> React Js
            </h2>
            <h2 className="hero_text skill_h2" id="net">
              .Net UI
            </h2>
            <h2 className="hero_text skill_h2" id="html">
              <i className="ri-html5-fill"></i> HTML
            </h2>
            <h2 className="hero_text skill_h2" id="css">
              <i className="ri-css3-fill"></i> CSS
            </h2>
            <h2 className="hero_text skill_h2" id="javascript">
              <i className="ri-javascript-fill"></i> Java Script
            </h2>
            <h2 className="hero_text skill_h2" id="jquery">
              jQuery
            </h2>
            <h2 className="hero_text skill_h2" id="bootstrap">
              <i className="ri-bootstrap-fill"></i> Bootstrap
            </h2>
            <h2 className="hero_text skill_h2" id="tailwind">
              <i className="ri-tailwind-css-fill"></i> Tailwind Css
            </h2>
            <h2 className="hero_text skill_h2" id="ajax">
              Ajax
            </h2>
            <h2 className="hero_text skill_h2" id="gsap">
              GSAP Animation
            </h2>
            <h2 className="hero_text skill_h2" id="node">
              <i className="ri-nodejs-fill"></i> Node Js
            </h2>
            <h2 className="hero_text skill_h2" id="express">
              Express Js
            </h2>
            <h2 className="hero_text skill_h2" id="sql">
              <i className="ri-database-2-fill"></i> SQL
            </h2>
            <h2 className="hero_text skill_h2" id="mongo">
              Mongo DB
            </h2>
            <h2 className="hero_text skill_h2" id="git">
              <i className="ri-git-commit-fill"></i> GIT
            </h2>
            <h2 className="hero_text skill_h2" id="github">
              <i className="ri-github-fill"></i> Git Hub
            </h2>
          </div>
        </div>
        {/* Skill end */}
      </section>
  )
}

export default Skill_Section