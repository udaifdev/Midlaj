import React from 'react';
import { Gift, ExternalLink } from 'lucide-react';

const RegistryScreen = () => {
    return (
        <div className="mobile-container">
            <div className="gifts-page">
                <div className="gifts-illustration">
                    <Gift size={80} />
                </div>

                <h2 className="gifts-title">Gifts Registry</h2>

                <p className="gifts-text">
                    The best gift we could ask of you is your presence at our wedding.
                    We hope that you come and share this day with us.
                    <br /><br />
                    If you would like to give us a gift, we are registered on Macy's and Amazon.
                </p>

                <div className="registry-buttons">
                    <a href="https://www.macys.com/registry" target="_blank" rel="noopener noreferrer" className="registry-btn">
                        <ExternalLink size={18} />
                        Macy's Registry
                    </a>
                    <a href="https://www.amazon.com/wedding" target="_blank" rel="noopener noreferrer" className="registry-btn">
                        <ExternalLink size={18} />
                        Amazon Registry
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RegistryScreen;
