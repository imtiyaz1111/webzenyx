import React, { useState } from "react";
import "./Portfolio.css";
import { ArrowRight } from "lucide-react";

import port1 from "./../../assets/img/portfolio/expensio.png"
import SEO from "../../components/SEO";

const tabs = [
    "All",
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Cloud Solutions",
];

const projects = [
    {
        id: 1,
        cat: "Web Development",
        title: "E-Commerce Platform",
        desc: "Full-featured online shopping platform with modern UI.",
        tags: ["React", "Node", "MongoDB"],
        img: port1,
    },
    {
        id: 2,
        cat: "Mobile App",
        title: "Healthcare Mobile App",
        desc: "Patient management system with telemedicine features.",
        tags: ["React Native", "Firebase"],
        img: "https://i.imgur.com/2x7G2qT.png",
    },
    {
        id: 3,
        cat: "Web Development",
        title: "FinTech Dashboard",
        desc: "Real-time financial analytics dashboard.",
        tags: ["Next.js", "API"],
        img: "https://i.imgur.com/8Qf7Y5m.png",
    },
    {
        id: 4,
        cat: "Cloud Solutions",
        title: "SaaS Analytics Tool",
        desc: "Enterprise analytics platform.",
        tags: ["AWS", "Microservices"],
        img: "https://i.imgur.com/2x7G2qT.png",
    },
];

const Portfolio = () => {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.cat === active);

    return (

        <>
        <SEO
        title="Portfolio | Webzenyx Projects & Case Studies"
        description="Discover Webzenyx’s portfolio showcasing successful web, mobile, and AI-driven projects."
        keywords="webzenyx portfolio, digital projects"
        url="https://www.webzenyx.com/portfolio"
      />
            {/* breadcrum  services section  */}
            <section className="webzenyx-breadcrum">
                <div className="container text-center position-relative z-3">

                    {/* Badge */}
                    <div className="badge-box mx-auto">
                        <span className="dot"></span>
                        <span>Our Portfolio</span>
                    </div>

                    {/* Title */}
                    <h1 className="hero-title">
                        Featured <span className="blue">Projects </span> <br />
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-sub">
                        Explore our collection of successful projects that showcase our expertise
                        and commitment to excellence.
                    </p>
                </div>

                {/* Glows */}
                <div className="glow glow-left"></div>
                <div className="glow glow-right"></div>
            </section>

            {/* OUR PORTFOLIO SECTION */}

            <section className="portfolio">
                <div className="container">

                    {/* TABS */}
                    <div className="tabs">
                        {tabs.map((t, i) => (
                            <button
                                key={i}
                                className={active === t ? "tab active" : "tab"}
                                onClick={() => setActive(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* CARDS */}
                    <div className="row g-4 mt-3">
                        {filtered.map((p) => (
                            <div className="col-lg-6" key={p.id}>
                                <div className="project-card">

                                    {/* badge */}
                                    <div className="badge">{p.cat}</div>

                                    <div className="img-wrap">
                                        <img src={p.img} alt="" />

                                        {/* hover overlay */}
                                        <div className="overlay">
                                            <h4>{p.title}</h4>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <h5>{p.title}</h5>
                                        <p>{p.desc}</p>

                                        <div className="tags">
                                            {p.tags.map((t, i) => (
                                                <span key={i}>{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bottom"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA section */}

            <section className="project-cta">
                <div className="container">

                    <div className="cta-box">

                        {/* subtle corners */}
                        <div className="line tl"></div>
                        <div className="line br"></div>

                        <h2 className="title">
                            Have a Project in <span className="grad">Mind?</span>
                        </h2>

                        <p className="text">
                            Let's turn your vision into reality. We're ready to create something amazing
                            together.
                        </p>

                        <button className="cta-btn">
                            Start Your Project
                            <ArrowRight size={16} />
                        </button>

                    </div>

                </div>
            </section>

        </>


    );
};

export default Portfolio;
