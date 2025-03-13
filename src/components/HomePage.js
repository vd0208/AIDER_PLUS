import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; 

import hospitals from "./hospitals";

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide the intro animation after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="intro-animation">
          <div className="intro-logo">Adier+</div>
        </div>
      )}

      <div className={`app-container ${showIntro ? "hidden" : ""}`}>
        <div className="home-container">
          <h1 className="home-title">Adier+</h1>
          <div className="hospital-list">
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="hospital-card">
                <h2 className="hospital-name">{hospital.name}</h2>
                <p className="hospital-history">{hospital.history}</p>
                <p className="hospital-services"><strong>Services:</strong> {hospital.services}</p>
                <Link to={`/doctors/${hospital.id}`} className="visit-btn">Visit</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
