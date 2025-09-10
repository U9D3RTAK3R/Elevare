import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Services from './pages/Services.jsx';
import ContactPage from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<App />} />
          {/* only add this route if About.jsx exists:
             <Route path="/about" element={<About />} /> */}
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
