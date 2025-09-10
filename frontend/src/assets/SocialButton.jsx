import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./SocialButton.css";

function SocialButton() {
  return (
    <div className="social-buttons">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn instagram"
      >
        <FaInstagram size={20} />
        <span>Instagram</span>
      </a>

      <a
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp"
      >
        <FaWhatsapp size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default SocialButton;
