// src/components/Support2.jsx
import picture1 from '../assets/Therapy.jpeg';
import Video1 from '../assets/MentalHealth.mp4';
import './Support2.css';

function Support2() {
  return (
    <section className="support2-container" aria-label="Support features and therapies">
      {/* Upper container (approx 2/3 height) */}
      <div className="upper-side">
        <div className="left-side1" aria-hidden="false">
          {/* Autoplay requires muted in most browsers */}
          <video
            className="feature-video"
            src={Video1}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Mental health intro video"
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="right-side1">
          <h2 className="sh2">WHAT SETS US APART</h2>

          <ul className="sul">
            <li>
              Confidential booking system available both on-campus (physical) and online.
            </li>
            <li>
              24/7 helpline worldwide — free through our website and contact numbers.
            </li>
            <li>
              We are connected with the best and most experienced doctors to help you overcome depression and anxiety.
            </li>
            <li>
              AI ChatBot for immediate diagnosis and initial triage of mental health concerns.
            </li>
            <li>
              Group therapy with peer-support groups, moderated forums and group video sessions.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom container (approx 1/3 height) */}
      <div className="bottom-side">
        <div className="left-side2">
          <img src={picture1} alt="Therapy session" className="therapy-img" />
        </div>

        <div className="right-side2">
          <h4 className="sh4">Offering All Kinds of Therapies</h4>

          <ol className="sol">
            <li>Cognitive Behavioural Therapy (CBT)</li>
            <li>Mindfulness-Based Therapy (MBT)</li>
            <li>Interpersonal Therapy (IPT)</li>
            <li>Solution-Focused Brief Therapy (SFBT)</li>
          </ol>

          <h4 className="others">
            with supportive counselling and other psychoeducation programs as well
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Support2;
