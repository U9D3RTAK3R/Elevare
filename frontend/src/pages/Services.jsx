import { useState } from 'react';
import Support1 from '../components/Support1.jsx'; // use PascalCase for components
import Support2 from '../components/Support2.jsx';
function Services() {
  return (
    <div className="page">
      <div className="contact-page-wrapper">
        <Support1 />
        <Support2 />
      </div>
    </div>
  );
}
export default Services;