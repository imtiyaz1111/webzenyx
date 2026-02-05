import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

import SEO from "../../components/SEO";
import "./../About/About.css";

const About = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "250+", label: "Projects Completed" },
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  // TIME LINE SECTION

  const journeyData = [
    {
      year: "2015",
      title: "Founded",
      desc: "Started with a vision to transform digital experiences.",
      side: "left",
    },
    {
      year: "2017",
      title: "First Major Client",
      desc: "Partnered with Fortune 500 company.",
      side: "right",
    },
    {
      year: "2020",
      title: "Global Expansion",
      desc: "Opened offices in 5 countries.",
      side: "left",
    },
    {
      year: "2023",
      title: "Industry Leader",
      desc: "Recognized as a leading digital agency worldwide.",
      side: "right",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Innovation First",
      desc: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
      icon: "💡",
      active: true,
    },
    {
      number: "02",
      title: "Client Success",
      desc: "Your success is our priority. We build lasting partnerships based on trust and results.",
      icon: "💙",
    },
    {
      number: "03",
      title: "Excellence",
      desc: "We maintain the highest standards in everything we do, from code quality to communication.",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Collaboration",
      desc: "Great solutions emerge from great teamwork. We work closely with you every step of the way.",
      icon: "🤝",
    },
  ];

  const data = [
    {
      title: "Technical Excellence",
      desc: "Our team comprises senior developers with expertise in modern tech stacks including React, Node.js, Flutter, and cloud technologies.",
      icon: "💻",
    },
    {
      title: "On-Time Delivery",
      desc: "We follow agile methodologies and maintain strict timelines to ensure your project launches when you need it.",
      icon: "⏱️",
    },
    {
      title: "Dedicated Support",
      desc: "Our responsive support team is committed to addressing your concerns and providing timely assistance.",
      icon: "🎧",
    },
    {
      title: "Scalable Solutions",
      desc: "We build applications that grow with your business, ensuring long-term value and adaptability.",
      icon: "⚙️",
    },
    {
      title: "Data Security",
      desc: "Enterprise-grade security practices protect your sensitive data and ensure compliance with industry standards.",
      icon: "🛡️",
    },
    {
      title: "Measurable Results",
      desc: "We focus on delivering solutions that drive real business outcomes and measurable ROI.",
      icon: "📊",
    },
  ];

  return (
    <>
      <SEO
        title="About Webzenyx | Innovative Digital Agency"
        description="Learn about Webzenyx, a digital agency focused on innovation, performance, and scalable digital solutions."
        keywords="about webzenyx, digital agency company"
        url="https://www.webzenyx.com/about"
      />
      {/* breadcrum  services section  */}
      <section className="webzenyx-breadcrum">
        <div className="container text-center position-relative z-3">
          {/* Badge */}
          <div className="badge-box mx-auto">
            <span className="dot"></span>
            <span>About Webzenyx</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Building the <span className="blue">Future </span>
            of Digital
          </h1>

          {/* Subtitle */}
          <p className="hero-sub">
            We are a passionate team of designers, developers, and strategists dedicated to 
            creating exceptional digital experiences that transform businesses.
          </p>
        </div>

        {/* Glows */}
        <div className="glow glow-left"></div>
        <div className="glow glow-right"></div>
      </section>

      {/* our story section */}
      <section className="our-story-section">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={6}>
              <h2 className="story-title">
                Our <span>Story</span>
              </h2>
              <div className="story-line"></div>

              <p>
                Founded in 2015, Webzenyx Solution started with a simple
                mission: to help businesses thrive in the digital age. What
                began as a small team of three passionate developers has grown
                into a full-service digital agency serving clients across 30+
                countries.
              </p>

              <p>
                We believe that great technology should be accessible to all
                businesses, regardless of size.
              </p>

              <p>
                Today, we continue to push boundaries and put our clients first.
              </p>

              {/* FEATURES */}
              <div className="story-features">
                <span>🌍 30+ Countries</span>
                <span>⚡ Fast Delivery</span>
                <span>🏆 Award Winning</span>
              </div>
            </Col>

            {/* RIGHT STATS */}
            <Col lg={6}>
              <div className="stats-grid">
                {stats.map((item, index) => (
                  <div className="stat-card" key={index}>
                    <div className="hover-corner"></div>
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TIME LINE SECTION */}

      <section className="journey-section">
        <Container>
          {/* Header */}
          <div className="journey-header text-center">
            <h2>
              Our <span>Journey</span>
            </h2>
            <p>Key milestones that shaped who we are today.</p>
            <div className="journey-line"></div>
          </div>

          {/* Timeline */}
          <div className="timeline">
            {journeyData.map((item, index) => (
              <div key={index} className={`timeline-item ${item.side}`}>
                <div className="timeline-card">
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <span className="timeline-dot"></span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CORVALUES SECTION */}
      <section className="core-values-section">
        <Container>
          <div className="core-header text-center">
            <h2>
              Our Core <span>Values</span>
            </h2>
            <p>
              The principles that guide our work and relationships with clients.
            </p>
            <div className="core-line"></div>
          </div>

          <Row className="g-4">
            {values.map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <div className={`core-card ${item.active ? "active" : ""}`}>
                  <span className="core-number">{item.number}</span>

                  <div className="core-icon">
                    <span>{item.icon}</span>
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>

                  {/* Bottom border */}
                  <span className="bottom-border"></span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="why-webzenyx">
        <Container>
          {/* Header */}
          <div className="why-header text-center">
            <h2>
              Why Choose <span>Webzenyx?</span>
            </h2>
            <p>
              We combine technical expertise with business acumen to deliver
              solutions that make a real difference.
            </p>
          </div>

          {/* Cards */}
          <Row className="g-4 mt-4">
            {data.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="why-card-webzenyx">
                  <div className="why-icon-webzenyx">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span className="bottom-line"></span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <Container>
          <div className="cta-card">
            {/* Glow border */}
            <span className="cta-border"></span>

            <h2>
              Ready to Work <span>Together?</span>
            </h2>

            <p>
              Let’s collaborate and create something extraordinary for your
              business.
            </p>

            <a href="/contact" className="cta-btn">
              Get in Touch →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
