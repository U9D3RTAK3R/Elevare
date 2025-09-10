import { useState } from 'react';
import Contact from '../components/Contact_main.jsx'; // use PascalCase for components
import './Contact.css';
function ContactPage() {
  return (
    <div className="page">
      <div className="contact-page-wrapper">
        <Contact />
      </div>
    </div>
  );
}
export default ContactPage;
