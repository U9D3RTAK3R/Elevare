import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Services from './pages/Services';
import FloatingButton from './components/FloatingButton';
import myIcon from './assets/AI1.png';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/About';

// import FloatingButton from './components/FloatingButton';
// import myIcon from './assets/my-icon.png'; // <-- replace with your own small image

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-root">
      <main className="main-content">
                <Services />
<About />
        <ContactPage />
      </main>
      <FloatingButton imageSrc={myIcon} navigateTo="/" />

      <Footer />
    </div>
  );
}

export default App;
