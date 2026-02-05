import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { MessageSquare, MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import "./Contact.css";
import SEO from "../../components/SEO";

const Contact = () => {
  return (
    <>
    <SEO
        title="Contact Webzenyx | Get a Free Consultation"
        description="Contact Webzenyx for web development, AI solutions, or digital transformation. Let’s build something great."
        keywords="contact webzenyx, digital agency contact"
        url="https://www.webzenyx.com/contact"
      />
      {/* breadcrum  services section  */}
      <section className="webzenyx-breadcrum">
        <div className="container text-center position-relative z-3">
          {/* Badge */}
          <div className="badge-box mx-auto">
            <span className="dot"></span>
            <span>Contact Us</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Let's Start a <span className="blue">Conversation</span> <br />
          </h1>

          {/* Subtitle */}
          <p className="hero-sub">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Glows */}
        <div className="glow glow-left"></div>
        <div className="glow glow-right"></div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="row g-4">
            {/* ===== LEFT FORM ===== */}
            <div className="col-lg-8">
              <div className="contact-card">
                <div className="d-flex gap-3 align-items-center mb-3">
                  <div className="icon-box">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h4>Send a Message</h4>
                    <p className="mute">Fill out the form below</p>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label>First Name *</label>
                    <input placeholder="John" />
                  </div>

                  <div className="col-md-6">
                    <label>Last Name *</label>
                    <input placeholder="Doe" />
                  </div>

                  <div className="col-md-6">
                    <label>Email Address *</label>
                    <input placeholder="john@example.com" />
                  </div>

                  <div className="col-md-6">
                    <label>Phone Number</label>
                    <input placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="col-12">
                    <label>Subject *</label>
                    <select>
                      <option>Select a subject</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label>Project Budget</label>
                    <select>
                      <option>Select budget range</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label>Message *</label>
                    <textarea placeholder="Tell us about your project..." />
                  </div>

                  <div className="col-12">
                    <button className="send-btn">
                      Send Message
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== RIGHT INFO ===== */}
            <div className="col-lg-4">
              <div className="info-wrap">
                <Info
                  icon={<MapPin size={20} />}
                  title="Visit Us"
                  text="123 Tech Park, Innovation Street
                Silicon Valley, CA 94000"
                />

                <Info
                  icon={<Phone size={20} />}
                  title="Call Us"
                  text="+91 9907984767"
                />

                <Info
                  icon={<Mail size={20} />}
                  title="Email Us"
                  text="webzenyx@gmail.com"
                />

                <Info
                  icon={<Clock size={20} />}
                  title="Working Hours"
                  text="Mon - Fri: 9:00 AM - 7:00 PM
                Sat - Sun: Closed"
                />

                {/* MAP */}
                <div className="map-card">
                  <MapPin size={26} />
                  <p>Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Info = ({ icon, title, text }) => (
  <div className="info-card">
    <div className="icon-box">{icon}</div>
    <div>
      <h6>{title}</h6>
      <p className="mute">{text}</p>
    </div>
  </div>
);

export default Contact;
