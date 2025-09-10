import React from 'react';
import logo from "../assets/Logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "@fontsource/inter/400.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image">
        <img src={logo} alt="Logo" />
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact Us</a>
        <a href="/Services">Services</a>
        <a href="/faq">FAQ</a>
        <a href="/tacs">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
      </div>

      <div className="footer-sm">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={28} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={28} />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={28} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={28} />
        </a>
      </div>

      <div className='footer-credits'>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <p>Developed by ClutchRunner 86</p>
      </div>
    </footer>
  );
}

export default Footer;
