import React from 'react';
import { User, Heart } from 'lucide-react';

const OpeningScreen = ({ onNext }) => {
  return (
    <div className="opening-screen" onClick={onNext}>
      <div className="couple-images">
        <div className="person-frame">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Cyqs5EDAg1YS838VM_RLcsUbMnV0oqn5ce5mQ5P_Gg&s" alt="Mohammed Midlaj" />
        </div>
        <div className="couple-divider">
          <Heart size={28} fill="#d4af37" />
        </div>
        <div className="person-frame">
          <img src="https://c8.alamy.com/comp/DKHG40/rural-indian-village-bride-dressed-in-colourful-sari-and-gold-jewelry-DKHG40.jpg" alt="Ayshathul Rehana" />
        </div>
      </div>

      <h1 className="couple-names">
        Mohammed Midlaj JU<br />
        &<br />
        Ayshathul Rehana
      </h1>

      <div className="tap-text">
        <span>Tap to Enter</span>
      </div>
    </div>
  );
};

export default OpeningScreen;