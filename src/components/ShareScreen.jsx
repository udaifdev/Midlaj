import React from 'react';
import { Share2 } from 'lucide-react';

const ShareScreen = () => {
    const handleShare = () => {
        const text = `You're Invited! 💒

Mohammed Midlaj JU & Ayshathul Rehana
cordially invite you to their wedding celebration.

📍 RG Hall, Virajpet, Kodagu, Karnataka
📅 12.02.2026 (Thursday)
⏰ 12:30 PM

We would be honored to have you share in our joy.

With love,
Mohammed & Rehana`;

        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="mobile-container">
            <div className="share-page">
                <h2 className="share-title">Share the Joy</h2>

                <p className="share-text">
                    Help us spread the word about our special day by sharing this invitation with family and friends.
                </p>

                <button className="share-button" onClick={handleShare}>
                    <Share2 size={36} />
                </button>
            </div>
        </div>
    );
};

export default ShareScreen;
