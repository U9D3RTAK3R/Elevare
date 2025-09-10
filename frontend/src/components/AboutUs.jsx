import './AboutUs.css';
import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Person1 from '../assets/Person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';
function AboutUs() {
  return (
    <div className="about-container">
      {/* Headings */}
      <h1 className="about-title">ABOUT US</h1>
      <h2 className="about-subtitle">The Hearts Behind Our Work</h2>

      {/* People section */}
      <div className="people-row">
        {/* Person 1 */}
        <div className="person-card">
          <h4 className="person-name">Person 1</h4>
          <div className="person-image-frame">
            <img src={Person1} alt="Person 1" />
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon-btn instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-btn linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Person 2 */}
        <div className="person-card">
          <h4 className="person-name">Person 2</h4>
          <div className="person-image-frame">
            <img src={Person2} alt="Person 2" />
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon-btn instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-btn linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Person 3 */}
        <div className="person-card">
          <h4 className="person-name">Person 3</h4>
          <div className="person-image-frame">
            <img src={Person3} alt="Person 3" />
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon-btn instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-btn linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Extra Section Below */}
      <div className="about-extra">
        <h2>VISION & MISSION</h2>
        <p>
          {/* You can replace this text later */}
To provide accessible, confidential, and evidence-based digital mental health and psychological support for students in higher education, empowering them to manage stress, build resilience, and maintain emotional well-being while pursuing academic and personal growth and to create a digitally inclusive ecosystem where every student in higher education feels supported, understood, and equipped with the tools to nurture their mental health, fostering a future of healthier minds and stronger communities.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
