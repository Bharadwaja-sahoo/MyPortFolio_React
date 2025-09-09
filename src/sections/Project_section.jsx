import React, { useEffect, useState, useRef } from "react";

// ✅ Import all images from src
import dentalCareImg from "../assets/Images/projects/Dental Care.png";
import travelWebImg from "../assets/Images/projects/Travel site.png";
import retroSiteImg from "../assets/Images/projects/Retro site.png";
import portfolioImg from "../assets/Images/projects/Portfolio.png";
import myWorkshopImg from "../assets/Images/projects/My Workshop.png";
import animatedSiteImg from "../assets/Images/projects/Animated site.png";
import coffeeShopImg from "../assets/Images/projects/Coffee Shop.png";
import nikeSiteImg from "../assets/Images/projects/nike site.png";
import gymSiteImg from "../assets/Images/projects/Gym Site.png";
import hospitalSiteImg from "../assets/Images/projects/Hospital Site.png";
import medicalSiteImg from "../assets/Images/projects/medical site.png";
import shoppingKaroImg from "../assets/Images/projects/shopping karo.com.png";
import foodSiteImg from "../assets/Images/projects/food site.png";
import burgerSiteImg from "../assets/Images/projects/burger site.png";
import imageGenImg from "../assets/Images/projects/image generator.png";
import ageCalculatorImg from "../assets/Images/projects/age calculator.png";
import bubbleGameImg from "../assets/Images/projects/Bubble Game.png";
import digitalClockImg from "../assets/Images/projects/Digital time.png";
import clockImg from "../assets/Images/projects/time.png";

const Project_section = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsRef = useRef([]);

  const projects = [
    { img: dentalCareImg, title: "Dento Care", link: "https://bharadwaja-sahoo.github.io/Dental-site/" },
    { img: travelWebImg, title: "Travel Web", link: "https://bharadwaja-sahoo.github.io/Travel-web/" },
    { img: retroSiteImg, title: "Retro site", link: "https://bharadwaja-sahoo.github.io/Retro-site/" },
    { img: portfolioImg, title: "My Portfolio", link: "https://bharadwaja-sahoo.github.io/MyPortfolio/" },
    { img: myWorkshopImg, title: "My Workshop", link: "https://bharadwaja-sahoo.github.io/MyWorkShop/" },
    { img: animatedSiteImg, title: "Animated Website", link: "https://bharadwaja-sahoo.github.io/Animated-website/" },
    { img: coffeeShopImg, title: "Coffee Shop", link: "https://bharadwaja-sahoo.github.io/coffeeSHOP/" },
    { img: nikeSiteImg, title: "Nike Redesign", link: "https://bharadwaja-sahoo.github.io/Nike-landing-page/" },
    { img: gymSiteImg, title: "Gym Web", link: "https://bharadwaja-sahoo.github.io/Gym-Website/" },
    { img: hospitalSiteImg, title: "Hospital Web", link: "https://bharadwaja-sahoo.github.io/Hospital-website/" },
    { img: medicalSiteImg, title: "Medical Web", link: "https://bharadwaja-sahoo.github.io/Medical-site/" },
    { img: shoppingKaroImg, title: "shoppingkaro.com", link: "https://bharadwaja-sahoo.github.io/shoppingKaro.com/" },
    { img: foodSiteImg, title: "Food Web", link: "https://bharadwaja-sahoo.github.io/food-Website/" },
    { img: burgerSiteImg, title: "Burger Web", link: "https://bharadwaja-sahoo.github.io/FoodWeb/" },
    { img: imageGenImg, title: "Ai Image generate", link: "https://bharadwaja-sahoo.github.io/AI-Image-Creator/" },
    { img: ageCalculatorImg, title: "Age Calculator", link: "https://bharadwaja-sahoo.github.io/Age-calculator/" },
    { img: bubbleGameImg, title: "Bubble game", link: "https://bharadwaja-sahoo.github.io/Bubbles-Game/" },
    { img: digitalClockImg, title: "Digital Clock", link: "https://bharadwaja-sahoo.github.io/DigitalClockWithMonth/" },
    { img: clockImg, title: "Clock", link: "https://bharadwaja-sahoo.github.io/DigitalClock/" },
  ];

  const totalCards = projects.length;

  const updateCarouselClasses = (index) => {
    cardsRef.current.forEach((card) => {
      card.classList.remove('active', 'prev-1', 'next-1', 'prev-2', 'next-2', 'prev-3', 'next-3');
    });

    cardsRef.current[index]?.classList.add('active');

    const prevIndex_1 = (index - 1 + totalCards) % totalCards;
    const nextIndex_1 = (index + 1) % totalCards;
    const prevIndex_2 = (index - 2 + totalCards) % totalCards;
    const nextIndex_2 = (index + 2) % totalCards;
    const prevIndex_3 = (index - 3 + totalCards) % totalCards;
    const nextIndex_3 = (index + 3) % totalCards;

    cardsRef.current[prevIndex_1]?.classList.add('prev-1');
    cardsRef.current[nextIndex_1]?.classList.add('next-1');
    cardsRef.current[prevIndex_2]?.classList.add('prev-2');
    cardsRef.current[nextIndex_2]?.classList.add('next-2');
    cardsRef.current[prevIndex_3]?.classList.add('prev-3');
    cardsRef.current[nextIndex_3]?.classList.add('next-3');
  };

  useEffect(() => {
    updateCarouselClasses(currentCardIndex);

    const interval = setInterval(() => {
      setCurrentCardIndex(prev => (prev + 1) % totalCards);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentCardIndex]);

  const handlePrev = () => {
    setCurrentCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setCurrentCardIndex((prev) => (prev + 1) % totalCards);
  };

  return (
    <section className="project-section">
      <h1 className="mb-5 hero_text heading" data-aos="fade-up" style={{ marginTop: "45px" }}>Projects</h1>
      <div className="we-carousel" data-aos="fade-up">
        <div className="back text_rev we-arrow left" onClick={handlePrev}>&#10094;</div>
        <div className="we-card-container">
          {projects.map((project, i) => (
            <div
              key={i}
              className="we-card back"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <img src={project.img} alt={project.title} />
              <h3>
                <a
                  href={project.link}
                  className="text_rev text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <a
                href={project.link}
                className="card-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
        <div className="back text_rev we-arrow right" onClick={handleNext}>&#10095;</div>
      </div>
    </section>
  );
};

export default Project_section;