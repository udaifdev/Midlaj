import React from 'react';
import { User, Heart } from 'lucide-react';

const OpeningScreen = ({ onNext }) => {
  return (
    <div className="opening-screen" onClick={onNext}>
      <div className="couple-images">
        <div className="person-frame">
          <img src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw616a0c98/images/feeds/UC108664.jpg" alt="Mohammed Midlaj" />
        </div>
        <div className="couple-divider">
          <Heart size={28} fill="#d4af37" />
        </div>
        <div className="person-frame">
          <img src="https://i.pinimg.com/736x/ca/27/6a/ca276a8984f445731beef2a57a59970c.jpg" alt="Ayshathul Rehana" />
        </div>
      </div>

      <h1 className="couple-names">
        Groomer Name<br />
        &<br />
        Bridel Name
      </h1>

      <div className="tap-text">
        <span>Tap to Enter</span>
      </div>
    </div>
  );
};

export default OpeningScreen;