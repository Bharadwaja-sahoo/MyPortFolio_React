import React, { useEffect, useState, useRef } from "react";

const Project_section = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsRef = useRef([]);

  const projects = [
    { img: "src/assets/images/projects/Dental Care.png", title: "Dento Care", link: "https://bharadwaja-sahoo.github.io/Dental-site/" },
    { img: "src/assets/images/projects/Travel site.png", title: "Travel Web", link: "https://bharadwaja-sahoo.github.io/Travel-web/" },
    { img: "src/assets/images/projects/Retro site.png", title: "Retro site", link: "https://bharadwaja-sahoo.github.io/Retro-site/" },
    { img: "src/assets/images/projects/Portfolio.png", title: "My Portfolio", link: "https://bharadwaja-sahoo.github.io/MyPortfolio/" },
    { img: "src/assets/images/projects/My Workshop.png", title: "My Workshop", link: "https://bharadwaja-sahoo.github.io/MyWorkShop/" },
    { img: "src/assets/images/projects/Animated site.png", title: "Animated Website", link: "https://bharadwaja-sahoo.github.io/Animated-website/" },
    { img: "src/assets/images/projects/Coffee Shop.png", title: "Coffee Shop", link: "https://bharadwaja-sahoo.github.io/coffeeSHOP/" },
    { img: "src/assets/images/projects/nike site.png", title: "Nike Redesign", link: "https://bharadwaja-sahoo.github.io/Nike-landing-page/" },
    { img: "src/assets/images/projects/Gym Site.png", title: "Gym Web", link: "https://bharadwaja-sahoo.github.io/Gym-Website/" },
    { img: "src/assets/images/projects/Hospital Site.png", title: "Hospital Web", link: "https://bharadwaja-sahoo.github.io/Hospital-website/" },
    { img: "src/assets/images/projects/medical site.png", title: "Medical Web", link: "https://bharadwaja-sahoo.github.io/Medical-site/" },
    { img: "src/assets/images/projects/shopping karo.com.png", title: "shoppingkaro.com", link: "https://bharadwaja-sahoo.github.io/shoppingKaro.com/" },
    { img: "src/assets/images/projects/food site.png", title: "Food Web", link: "https://bharadwaja-sahoo.github.io/food-Website/" },
    { img: "src/assets/images/projects/burger site.png", title: "Burger Web", link: "https://bharadwaja-sahoo.github.io/FoodWeb/" },
    { img: "src/assets/images/projects/image generator.png", title: "Ai Image generate", link: "https://bharadwaja-sahoo.github.io/AI-Image-Creator/" },
    { img: "src/assets/images/projects/age calculator.png", title: "Age Calculator", link: "https://bharadwaja-sahoo.github.io/Age-calculator/" },
    { img: "src/assets/images/projects/Bubble Game.png", title: "Bubble game", link: "https://bharadwaja-sahoo.github.io/Bubbles-Game/" },
    { img: "src/assets/images/projects/Digital time.png", title: "Digital Clock", link: "https://bharadwaja-sahoo.github.io/DigitalClockWithMonth/" },
    { img: "src/assets/images/projects/time.png", title: "Clock", link: "https://bharadwaja-sahoo.github.io/DigitalClock/" },
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