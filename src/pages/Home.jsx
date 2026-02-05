import React from "react";

import SEO from "../components/SEO";

import aiVideo from "../assets/video/ai-hero.mp4";
import MarqueeStrip from "../components/MarqueeStrip";
import webzenix from "../assets/img/sidebar-logo.png";
import html from "./../assets/img/techIcon/html5-original.svg";
import css from "./../assets/img/techIcon/css3-original.svg";
import js from "./../assets/img/techIcon/javascript-original.svg";
import reactIcon from "./../assets/img/techIcon/react-original.svg";
import bootstrap from "./../assets/img/techIcon/bootstrap-original.svg";
import node from "./../assets/img/techIcon/nodejs-original.svg";
import mongo from "./../assets/img/techIcon/mongodb-original.svg";
import canva from "./../assets/img/techIcon/laravel-original.svg";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import aiImg from "./../assets/img/leta-talk-ai.webp";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const Home = () => {
  return (
    <>
      <SEO
        title="Webzenyx | Digital Solutions, Web Development & AI Services"
        description="Webzenyx crafts future-ready digital experiences with web development, mobile apps, UI/UX design, AI & cloud solutions."
        keywords="digital agency, web development, AI solutions, UI UX design"
        url="https://www.webzenyx.com/"
      />
      {/* Page Content */}
    
      {/* Hero-section */}
     <section className="premium-hero-modern">
      <div className="hero-grid-bg"></div>

      <div className="hero-grid">

        {/* LEFT CONTENT */}
        <div className="hero-left-col">
          <div className="hero-content-modern">
            <span className="hero-pill">
              Premium Web Development Agency
            </span>

            <h1 className="hero-heading-modern">
              We Craft <span>Digital</span>
              <br />
              Experiences That <span className="accent">Inspire</span>
            </h1>

            <p className="hero-subtext-modern">
              Transform your business with AI-powered, scalable and
              high-performance digital solutions built for the future.
            </p>

            <div className="hero-actions">
              <button className="btn-primary-gradient">
                Start Your Project →
              </button>

              <button className="btn-outline-glass">
                View Our Work
              </button>
            </div>

            <div className="hero-stats-modern">
              <div>
                <h3>250+</h3>
                <p>Projects Delivered</p>
              </div>
              <div>
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO (DESKTOP ONLY) */}
        <div className="hero-video-col">
          <div className="hero-video-modern">
            <video src={aiVideo} autoPlay muted loop playsInline />
            <div className="video-caption">
              <h5>AI-Driven Development</h5>
              <p>Smart • Secure • Scalable</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <MarqueeStrip/>

   <section className="hero-unique-section">
      <div className="hero-unique-container">

        {/* LEFT CONTENT */}
        <div className="hero-unique-left">
          <span className="hero-unique-tag">
            TRANSFORMING IDEAS INTO DIGITAL REALITY
          </span>

          <h1 className="hero-unique-title">
            Driven By <span>Vision</span>.<br />
            Built With <span>Logic</span>.<br />
            Delivered With <span>Purpose</span>.
          </h1>

          <p className="hero-unique-desc">
            Smart development solutions that turn your ideas into scalable,
            secure, and high-performing digital products.
          </p>

          <ul className="hero-unique-points">
            <li>Custom-Built Enterprise Solutions</li>
            <li>Modern & Scalable Tech Stack</li>
            <li>Engineered for Growth</li>
          </ul>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="hero-unique-right">
          <div className="hero-unique-gravity">
            <img
              src={webzenix}
              alt="Webzenix"
              className="hero-unique-core"
            />

            <div className="hero-unique-orbit">
              <img src={html} className="hero-tech html" alt="" />
              <img src={css} className="hero-tech css" alt="" />
              <img src={js} className="hero-tech js" alt="" />
              <img src={reactIcon} className="hero-tech react" alt="" />
              <img src={bootstrap} className="hero-tech bootstrap" alt="" />
              <img src={node} className="hero-tech node" alt="" />
              <img src={mongo} className="hero-tech mongo" alt="" />
              <img src={canva} className="hero-tech canva" alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>

    <ServicesSection/>

    <AboutSection/>

    <section className="ai-unique-section">
      <div className="ai-unique-container">

        {/* LEFT – IMAGE */}
        <div className="ai-unique-left">
          <div className="ai-unique-image-card">
            <img src={aiImg} alt="AI Technology" />

            {/* Floating badges */}
            <div className="ai-unique-badge top">
              ⭐⭐⭐⭐⭐
              <span>Happy Customers</span>
            </div>

            <div className="ai-unique-badge bottom">
              <strong>20+</strong>
              <span>Successful AI Projects</span>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="ai-unique-right">
          <span className="ai-unique-pill">LET’S TALK AI</span>

          <h2 className="ai-unique-title">
            Future-Proof Your Business <br />
            With Our <span>Intelligent AI Tech</span>
          </h2>

          <p className="ai-unique-desc">
            Leverage next-generation AI solutions to automate workflows,
            enhance customer experiences, unlock data-driven insights,
            and accelerate business growth.
          </p>

          <ul className="ai-unique-list">
            <li>AI-powered enterprise solutions</li>
            <li>Custom AI & ML development</li>
            <li>Conversational AI & chatbots</li>
            <li>Generative AI & strategy consulting</li>
          </ul>

          <button className="ai-unique-btn">
            Explore AI Tech With Us →
          </button>
        </div>

      </div>
    </section>
    <PortfolioSection/>
    <TestimonialsSection/>
    <FaqSection/>
    </>
  );
};

export default Home;
