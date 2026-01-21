import React from 'react';
import { Gift, ExternalLink, Heart } from 'lucide-react';

const RegistryScreen = () => {
       return (
        <div className="mobile-container">
            <div className="gifts-page">
                
                <div className="gifts-illustration">
                    <Heart size={80} />
                </div>

                <h2 className="gifts-title">You're Invited</h2>

                <p className="gifts-text">
                    You are warmly invited to celebrate our wedding day with us.
                    <br /><br />
                    Your presence will make our day more special and meaningful.
                    We truly hope you can join us and share this joyful moment.
                </p>

                <div className="registry-buttons">
                    <button className="registry-btn">
                        Join Us
                    </button>

                    <button className="registry-btn">
                        Celebrate With Us
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RegistryScreen;
