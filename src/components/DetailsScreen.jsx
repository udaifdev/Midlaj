import React from 'react';

const DetailsScreen = () => {
    return (
        <div className="mobile-container">
            <div className="details-page">
                <div className="detail-section">
                    <h2 className="person-name">Mohammed Midlaj JU</h2>
                    <p className="person-info">(s/o Joipore Ummer Haaji)</p>
                    <p className="person-info">Virajpete Kondangeri</p>
                </div>

                <div className="detail-section">
                    <div className="weds-text">WEDS</div>
                </div>

                <div className="detail-section">
                    <h2 className="person-name">Ayshathul Rehana</h2>
                    <p className="person-info">(daughter of Kareem)</p>
                    <p className="person-info">Virajpet</p>
                </div>

                <div className="detail-divider" />

                <div className="detail-section">
                    <p className="detail-label">Location</p>
                    <p className="detail-value">RG Hall, Virajpet, Kodagu, Karnataka</p>
                </div>

                <div className="detail-section">
                    <p className="detail-label">Date</p>
                    <p className="detail-value">12.02.2026 (Thursday)</p>
                </div>

                <div className="detail-section">
                    <p className="detail-label">Time</p>
                    <p className="detail-value">12:30 PM</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsScreen;