import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuBar = () => setMenuOpen(!menuOpen);
  const crossBar = () => setMenuOpen(false);
  const menuBarClose = () => setMenuOpen(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-theme", !darkMode);
    document.body.classList.toggle("dark-theme", darkMode);
  };

  useEffect(() => {
    const switchBtn = document.querySelector(".switch");
    if (!switchBtn) return;

    const handleToggle = () => {
      var content = document.querySelector(".content");
      var nav = document.querySelector(".nav");
      var nav_a = document.querySelectorAll(".nav-list-a");
      var nav_a_before = document.documentElement;
      var mood = document.querySelector(".switch");
      var menu = document.querySelector(".menu");
      var logoh2_1 = document.querySelectorAll(".logo h2:nth-child(1)");
      var logoh2_2 = document.querySelectorAll(".logo h2:nth-child(2)");
      var hero_text = document.querySelectorAll(".hero_text");
      var rev_text = document.querySelectorAll(".text_rev");
      var btns = document.querySelectorAll(".btns");
      var about_img = document.querySelector(".about-img");
      var skillh2 = document.querySelectorAll(".skill_h2");
      let icon = document.getElementById("themeIcon");
      var spans = document.querySelectorAll(".spans");
      var spans_rev = document.querySelectorAll(".spans-rev");
      var buttons = document.querySelector(".buttons");
      var buttons_rev = document.querySelector(".buttons-rev");
      var contact_section = document.querySelector(".contact-section");
      var footer_section = document.querySelector(".footer-section");
      var social_icon = document.querySelectorAll(".social_icon");
      var back = document.querySelectorAll(".back");
      var card_button = document.querySelectorAll(".card-button");
      var line = document.querySelectorAll(".line");

      var timelinentry = document.querySelectorAll('.timeline-entry');
      var timelinesvg = document.querySelectorAll('.timeline-entry svg');

      if (icon.classList.contains("ri-moon-fill")) {
        icon.classList.replace("ri-moon-fill", "ri-sun-fill");

        content.style.backgroundColor = "var(--white)";
        nav.style.backgroundColor = "var(--dark)";
        nav.style.boxShadow = "0px 0px 20px 0px var(--white)";
        nav_a.forEach(link => link.style.color = "var(--white)");
        nav_a_before.style.setProperty("--nav-before-bg", "var(--white)");
        mood.style.color = "var(--white)";
        menu.style.color = "var(--white)";
        logoh2_1.forEach(link => link.style.color = "rgb(255 255 255 / 23%)");
        logoh2_2.forEach(link => link.style.color = "var(--white)");
        hero_text.forEach(link => link.style.color = "var(--dark)");
        rev_text.forEach(link => link.style.color = "var(--white)");
        btns.forEach(link => {
          link.style.backgroundColor = "var(--dark)";
          link.style.color = "var(--white)";
          link.style.border = "2px solid var(--white)";
        });
        skillh2.forEach(link => link.style.border = "1px solid var(--dark)");
        spans.forEach(link => {
          link.style.background = "linear-gradient(0deg, var(--dark), transparent)";
          link.style.webkitBackgroundClip = "text";
          link.style.webkitTextFillColor = "transparent";
        });
        spans_rev.forEach(link => {
          link.style.background = "linear-gradient(0deg, var(--white), transparent)";
          link.style.webkitBackgroundClip = "text";
          link.style.webkitTextFillColor = "transparent";
        });
        buttons_rev.style.backgroundColor = "var(--white)";
        buttons_rev.style.color = "var(--dark)";
        contact_section.style.backgroundColor = "var(--dark)";
        footer_section.style.backgroundColor = "var(--dark)";
        social_icon.forEach(link => link.style.backgroundColor = "#b8c1ec61");
        back.forEach(link => link.style.backgroundColor = "var(--dark)");
        card_button.forEach(link => {
          link.style.color = "var(--white)";
          link.style.border = "2px solid var(--white)";
        });
        about_img.style.border = "5px solid var(--dark)";
        about_img.style.boxShadow = "0px 0px 30px var(--dark)";
        buttons.style.backgroundColor = "var(--dark)";
        buttons.style.color = "var(--white)";
        line.forEach(link => link.style.backgroundColor = "#00000013");

        document.documentElement.style.setProperty("--timeline-before-color", "var(--dark)");
        document.documentElement.style.setProperty("--timeline-after-color", "var(--white)");
        document.documentElement.style.setProperty("--timeline-after-border", "var(--dark)");
        timelinentry.forEach(link => {
          link.style.backgroundColor = "var(--dark)";
          link.style.color = "var(--white)";
          link.style.boxShadow = "0px 15px 100px -20px #232946";
        });
        timelinesvg.forEach(link => {
          link.style.color = "var(--white)";
        });

      } else {
        icon.classList.replace("ri-sun-fill", "ri-moon-fill");

        content.style.backgroundColor = "var(--dark)";
        nav.style.backgroundColor = "var(--white)";
        nav.style.boxShadow = "0px 0px 20px 0px var(--dark)";
        nav_a.forEach(link => link.style.color = "var(--dark)");
        nav_a_before.style.setProperty("--nav-before-bg", "var(--dark)");
        mood.style.color = "var(--dark)";
        menu.style.color = "var(--dark)";
        logoh2_1.forEach(link => link.style.color = "rgba(0, 0, 0, 0.233)");
        logoh2_2.forEach(link => link.style.color = "var(--dark)");
        hero_text.forEach(link => link.style.color = "var(--white)");
        rev_text.forEach(link => link.style.color = "var(--dark)");
        btns.forEach(link => {
          link.style.backgroundColor = "var(--white)";
          link.style.color = "var(--dark)";
          link.style.border = "2px solid var(--dark)";
        });
        skillh2.forEach(link => link.style.border = "1px solid var(--white)");
        spans.forEach(link => {
          link.style.background = "linear-gradient(0deg, var(--white), transparent)";
          link.style.webkitBackgroundClip = "text";
          link.style.webkitTextFillColor = "transparent";
        });
        spans_rev.forEach(link => {
          link.style.background = "linear-gradient(0deg, var(--dark), transparent)";
          link.style.webkitBackgroundClip = "text";
          link.style.webkitTextFillColor = "transparent";
        });
        buttons_rev.style.backgroundColor = "var(--dark)";
        buttons_rev.style.color = "var(--white)";
        contact_section.style.backgroundColor = "var(--white)";
        footer_section.style.backgroundColor = "var(--white)";
        social_icon.forEach(link => link.style.backgroundColor = "#1c203879");
        back.forEach(link => link.style.backgroundColor = "var(--white)");
        card_button.forEach(link => {
          link.style.color = "var(--dark)";
          link.style.border = "2px solid var(--dark)";
        });
        about_img.style.border = "5px solid var(--white)";
        about_img.style.boxShadow = "0px 0px 30px var(--white)";
        buttons.style.backgroundColor = "var(--white)";
        buttons.style.color = "var(--dark)";
        line.forEach(link => link.style.backgroundColor = "#ffffff13");

        document.documentElement.style.setProperty("--timeline-before-color", "var(--white)");
        document.documentElement.style.setProperty("--timeline-after-color", "var(--dark)");
        document.documentElement.style.setProperty("--timeline-after-border", "var(--white)");
        timelinentry.forEach(link => {
          link.style.backgroundColor = "var(--white)";
          link.style.color = "var(--dark)";
          link.style.boxShadow = "0px 15px 100px -20px #8b99df";
        });
        timelinesvg.forEach(link => {
          link.style.color = "var(--dark)";
        });
      }
    };

    switchBtn.addEventListener("click", handleToggle);

    return () => {
      switchBtn.removeEventListener("click", handleToggle);
    };
  }, []);

  return (
    <>
      {/* Header Navbar */}
      <header className="container-fluid p-4">
        <nav
          className="container nav d-flex align-items-center justify-content-between"
          data-aos="fade-down"
        >
          <Link to="/">
            <div className="logo p-3">
              <h2>Bharadwaja Sahoo</h2>
              <h2>Bharadwaja Sahoo</h2>
            </div>
          </Link>

          <ul className="nav-list list-unstyled">
            <li className="p-3">
              {/* <Link className="text-decoration-none nav-list-a active" to="/" onClick={menuBarClose}>
                Home
              </Link> */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-decoration-none nav-list-a ${isActive ? "active" : ""}`
                }
                onClick={menuBarClose}>
                Home
              </NavLink>
            </li>
            <li className="p-3">
              {/* <Link className="text-decoration-none nav-list-a" to="/about" onClick={menuBarClose}>
                About
              </Link> */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-decoration-none nav-list-a ${isActive ? "active" : ""}`
                }
                onClick={menuBarClose}>
                About
              </NavLink>
            </li>
            <li className="p-3">
              {/* <Link className="text-decoration-none nav-list-a" to="/skills" onClick={menuBarClose}>
                Skills
              </Link> */}
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `text-decoration-none nav-list-a ${isActive ? "active" : ""}`
                }
                onClick={menuBarClose}>
                Skills
              </NavLink>
            </li>
            <li className="p-3">
              {/* <Link className="text-decoration-none nav-list-a" to="/projects" onClick={menuBarClose}>
                Projects
              </Link> */}
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-decoration-none nav-list-a ${isActive ? "active" : ""}`
                }
                onClick={menuBarClose}>
                Projects
              </NavLink>
            </li>
            <li className="p-3">
              {/* <Link className="text-decoration-none nav-list-a" to="/contact" onClick={menuBarClose}>
                Contact
              </Link> */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-decoration-none nav-list-a ${isActive ? "active" : ""}`
                }
                onClick={menuBarClose}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex">
            <div className="menu p-3" onClick={menuBar}>
              <i className="ri-menu-4-line"></i>
            </div>
            <div className="switch p-3" onClick={toggleTheme}>
              <i
                id="themeIcon"
                className={darkMode ? "ri-sun-fill" : "ri-moon-fill"}
              ></i>
            </div>
          </div>
        </nav>
      </header>

      {/* Slide Menu */}
      <div id="menudiv">
        <div
          id="menu-bar"
          style={{ display: menuOpen ? "flex" : "none" }}
        >
          <img
            src="src/assets/Images/my_stamp.png"
            className="animate__animated animate__pulse animate__infinite"
            alt="logo"
          />
          <i
            className="cross fa-solid fa-xmark animate__animated animate__headShake animate__infinite"
            onClick={crossBar}
          ></i>

          <Link to="/" onClick={menuBarClose}>Home</Link>
          <Link to="/about" onClick={menuBarClose}>About</Link>
          <Link to="/skills" onClick={menuBarClose}>Skills</Link>
          <Link to="/projects" onClick={menuBarClose}>Projects</Link>
          <Link to="/contact" onClick={menuBarClose}>Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
