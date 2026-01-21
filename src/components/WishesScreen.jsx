import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const WishesScreen = ({ isMuted, toggleMute }) => {
    const wishers = ['Name-1', 'Name-2', 'Name-3', 'Name-4', 'Name-5'];

    return (
        <div className="mobile-container">
            <button className="music-control" onClick={(e) => { e.stopPropagation(); toggleMute(); }}>
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            <div className="wishes-page">
                <h2 className="wishes-title">Best Wishes</h2>

                <p className="wishes-text">
                    May your love story be filled with<br />
                    endless joy and blessings
                </p>

                <div className="wishes-names">
                    {wishers.map((name, index) => (
                        <span key={index} className="wish-name">{name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WishesScreen;
