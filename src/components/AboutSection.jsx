import { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 50, label: "Expert Developers" },
  { value: 150, label: "Awards Won" },
  { value: 30, label: "Countries Served" },
  { value: 500, label: "Ideas Executed" },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-unique-section" ref={sectionRef}>
      <div className="about-unique-container">

        {/* HEADER */}
        <div className="about-unique-header">
          <span className="about-unique-badge">About Webzenix</span>

          <h2>
            We Transform Ideas <br />
            Into <span>Digital Reality</span>
          </h2>

          <p>
            At Webzenix Solution, we build digital experiences that combine
            strategy, design, and technology to create measurable business impact.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="about-unique-grid">

          {/* LEFT INFO */}
          <div className="about-unique-info">
            <ul>
              <li>Expert team with 10+ years of experience</li>
              <li>Agile development methodology</li>
              <li>24/7 dedicated support & maintenance</li>
              <li>Transparent communication & reporting</li>
            </ul>

            <button className="about-unique-cta">
              Discover More →
            </button>
          </div>

          {/* RIGHT STATS */}
          <div className="about-unique-stats">
            {statsData.map((item, i) => (
              <StatUnique
                key={i}
                target={item.value}
                label={item.label}
                start={start}
                delay={i * 120}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

/* ===============================
   STAT COUNTER
================================ */
const StatUnique = ({ target, label, start, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(target / 50);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCount(current);
      }, 25);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, target, delay]);

  return (
    <div className="about-unique-stat-box">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
};
