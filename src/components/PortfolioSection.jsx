import { useState, useEffect } from "react";

import img1 from "./../assets/img/portfolio/p1.png";
import img2 from "./../assets/img/portfolio/p2.png";
import img3 from "./../assets/img/portfolio/p3.png";
import img4 from "./../assets/img/portfolio/p5.png";

const portfolioDatas = [
  { id: 1, index: "01", title: "E-Commerce Platform", tag: "Web Development", image: img1, theme: "blue" },
  { id: 2, index: "02", title: "Healthcare App", tag: "Mobile App", image: img2, theme: "indigo" },
  { id: 3, index: "03", title: "FinTech Dashboard", tag: "UI / UX", image: img3, theme: "dark" },
  { id: 4, index: "04", title: "SaaS Analytics", tag: "Cloud", image: img4, theme: "cyan" },
  { id: 5, index: "05", title: "EdTech Platform", tag: "Web App", image: img1, theme: "purple" },
  { id: 6, index: "06", title: "Logistics System", tag: "Enterprise", image: img2, theme: "green" },
  { id: 7, index: "07", title: "Marketing Dashboard", tag: "Analytics", image: img3, theme: "orange" },
  { id: 8, index: "08", title: "AI SaaS Tool", tag: "AI / ML", image: img4, theme: "pink" },
];

const PortfolioSection = () => {
  const [activeId, setActiveId] = useState(1);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setPopupImage(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section className="portfolio-unique-section">
      <div className="portfolio-unique-container">

        {/* HEADER */}
        <div className="portfolio-unique-header">
          <span className="portfolio-unique-pill">Our Portfolio</span>
          <h2>Featured Projects</h2>
        </div>

        {/* PANELS */}
        <div className="portfolio-unique-row">
          {portfolioDatas.map((item) => (
            <div
              key={item.id}
              className={`portfolio-unique-panel theme-${item.theme} ${
                activeId === item.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveId(item.id);
                setPopupImage(item.image);
              }}
            >
              <span className="portfolio-unique-index">{item.index}</span>

              <div className="portfolio-unique-content">
                <span className="portfolio-unique-tag">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
