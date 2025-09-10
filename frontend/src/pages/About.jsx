import { useState } from 'react';
import AboutUs from '../components/AboutUs.jsx'; // use PascalCase for components
function About() {
  return (
    <div className="page">
      <div className="contact-page-wrapper">
        <AboutUs />
      </div>
    </div>
  );
}
export default About;