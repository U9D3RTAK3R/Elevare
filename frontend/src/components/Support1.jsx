import picture1 from '../assets/Diversity_Collage_bad.jpg';
import picture2 from '../assets/Anonymous.jpg';
import './Support1.css';

function Support1() {
  return (
    <div className="support-container">

      {/* Left Side */}
      <div className="left-side">
        <img
          src={picture1}
          alt="Diversity collage"
          className="support-image1"
        />
      </div>

      {/* Right Side */}
      <div className="right-side">
        <h1 className="mh1">
          CARE THAT SPEAKS YOUR LANGUAGE
        </h1>
        <h3 className="mh3">
          Serving millions across the country and worldwide
        </h3>
        <h3 className="mh4">
        <b>Expert Counselling Assistance now available at your homes</b>
        </h3>
        <h3 className="mh6"><b>Our services are available in English, Hindi and Bengali</b></h3>
      </div>

      {/* Bottom Side */}
  <div className="bottom-side">
    <div className="quote-header">
      <img src={picture2} alt="Anonymous" className="support-image2" />
    </div>

    <p className="quote-name"><b> " The solution to trauma, stress and mental pressure of our beloved students is right here! 
      Fear none and contact us immediately "</b></p>

    <h4 className="speaks">
        Dr. Anonymous Person
    </h4>
    
    <button className="BookAp">Book An Appointment</button>
  </div>
    </div>
  );
}

export default Support1;
