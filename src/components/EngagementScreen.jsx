import React from 'react';
import { Hand } from 'lucide-react';

const EngagementScreen = () => {
    return (
        <div className="mobile-container">
            <div className="engagement-page">
                <h2 className="engagement-title">Our Engagement</h2>

                <div className="hands-container">
                    <div className="hand hand-left">
                        <Hand size={64} />
                    </div>
                    <div className="hand hand-right">
                        <Hand size={64} />
                    </div>
                    <div className="ring-container">
                        <div className="ring-glow">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="20" stroke="#d4af37" strokeWidth="4" />
                                <circle cx="30" cy="15" r="6" fill="#d4af37" />
                            </svg>
                        </div>
                    </div>
                </div>

                <p className="engagement-text">
                    Two souls become one<br />
                    A journey of love begins
                </p>
            </div>
        </div>
    );
};

export default EngagementScreen;