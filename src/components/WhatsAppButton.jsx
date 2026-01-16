import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = ""; // User can fill this in
    const message = encodeURIComponent(
        "Wedding Invitation 💍\nMohammed Midlaj JU & Ayshathul Rehana\n📍 RG Hall, Virajpet\n📅 12.02.2026 | ⏰ 12:30 PM"
    );
    const link = `https://wa.me/?text=${message}`;

    return (
        <a href={link} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <span style={{ marginTop: '5px' }}>💬</span>
        </a>
    );
};

export default WhatsAppButton;
