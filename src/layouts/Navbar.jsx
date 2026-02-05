import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar-wrapper">
        <nav className={`premium-navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="navbar-container">
            {/* LOGO */}
            <Link to="/" className="premium-logo">
              <img src={logo} alt="Webzenyx" />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="nav-menu">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            {/* CTA */}
            <Link to="/contact" className="premium-btn">
              Get Started
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              className="mobile-toggle"
              aria-label="Open Menu"
              onClick={() => setOpen(true)}
            >
              <Bars3Icon />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)}>
          <aside
            className="mobile-sidebar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sidebar-header">
              <img src={logo} alt="logo" />
              <button onClick={() => setOpen(false)}>
                <XMarkIcon />
              </button>
            </div>

            <ul className="sidebar-menu">
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
              <li><Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
