import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import logo from "./../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer-unique">
      <div className="footer-unique-container">

        {/* TOP FOOTER */}
        <div className="footer-unique-top">

          {/* BRAND */}
          <div className="footer-unique-brand">
            <div className="footer-unique-logo">
              <img src={logo} alt="footer-logo" />
            </div>

            <p>
              Transforming ideas into powerful digital solutions. We craft
              innovative web experiences that drive growth and success for
              businesses worldwide.
            </p>

            <div className="footer-unique-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-unique-col">
            <h5 className="footer-unique-title">Quick Links</h5>
            <ul className="footer-unique-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-unique-col">
            <h5 className="footer-unique-title">Our Services</h5>
            <ul className="footer-unique-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">IT Consulting</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-unique-col">
            <h5 className="footer-unique-title">Contact Info</h5>

            <div className="footer-unique-contact">
              <div className="footer-unique-contact-item">
                <span><FaMapMarkerAlt /></span>
                <p>
                  123 Tech Park, Innovation Street,
                  Silicon Valley, CA 94000
                </p>
              </div>

              <div className="footer-unique-contact-item">
                <span><FaPhoneAlt /></span>
                <p>+91 9907984767</p>
              </div>

              <div className="footer-unique-contact-item">
                <span><FaEnvelope /></span>
                <p>webzenyx@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-unique-bottom">
          <p>© 2025 Webzenix Solution. All rights reserved.</p>

          <div className="footer-unique-policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
