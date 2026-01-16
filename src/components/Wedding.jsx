import React, { useState, useEffect, useRef } from 'react';
import OpeningScreen from './OpeningScreen';
import EngagementScreen from './EngagementScreen';
import DetailsScreen from './DetailsScreen';
import WishesScreen from './WishesScreen';
import RegistryScreen from './RegistryScreen';
import ShareScreen from './ShareScreen';
import { Heart, ChevronLeft, ChevronDown } from 'lucide-react';
import '../styles/index.css';

// Heart Bubbles Component
const HeartBubbles = () => {
    return (
        <div className="heart-bubbles-container">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="heart-bubble">
                    <Heart size={20 + Math.random() * 15} fill="rgba(212, 175, 55, 0.3)" stroke="rgba(212, 175, 55, 0.5)" />
                </div>
            ))}
        </div>
    );
};

// Popper/Confetti Component
const Popper = ({ trigger }) => {
    const [confetti, setConfetti] = useState([]);

    useEffect(() => {
        if (trigger) {
            const newConfetti = [...Array(30)].map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                color: Math.random() > 0.5 ? '#d4af37' : '#f4e4bc',
                delay: `${Math.random() * 0.5}s`
            }));
            setConfetti(newConfetti);

            const timer = setTimeout(() => setConfetti([]), 3000);
            return () => clearTimeout(timer);
        }
    }, [trigger]);

    return (
        <div className="popper-container">
            {confetti.map((c) => (
                <div
                    key={c.id}
                    className="confetti"
                    style={{
                        left: c.left,
                        backgroundColor: c.color,
                        animationDelay: c.delay
                    }}
                />
            ))}
        </div>
    );
};

const Wedding = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [popperTrigger, setPopperTrigger] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    const pages = [
        OpeningScreen,
        EngagementScreen,
        DetailsScreen,
        WishesScreen,
        RegistryScreen,
        ShareScreen
    ];

    const totalPages = pages.length;

    // No audio initialization in useEffect anymore, we use the ref directly on the element
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.5;

        // Error handling
        const handleError = (e) => {
            console.error("Audio source failed:", e);
        };
        audio.addEventListener('error', handleError, true);

        // Attempt playback
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay blocked (waiting for interaction).");
                setIsMuted(true);
            });
        }

        return () => {
            audio.removeEventListener('error', handleError, true);
        };
    }, []);

    // Watch for page changes to enforce music playback if unmuted
    useEffect(() => {
        const audio = audioRef.current;
        if (audio && !isMuted && currentPage > 0) {
            if (audio.paused) {
                audio.play().catch(e => console.log("Playback enforcement failed", e));
            }
        }
    }, [currentPage, isMuted]);

    const toggleMute = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isMuted) {
                audio.play().then(() => {
                    setIsMuted(false);
                }).catch(e => console.error("Play failed:", e));
            } else {
                audio.pause();
                setIsMuted(true);
            }
        }
    };

    const goToNextPage = () => {
        // Trigger play on first navigation if still muted/paused
        const audio = audioRef.current;
        if (audio && (audio.paused || isMuted)) {
            audio.play().then(() => {
                setIsMuted(false);
            }).catch(e => console.log("Audio unlock failed", e));
        }

        if (currentPage < totalPages - 1 && !isAnimating) {
            setIsAnimating(true);
            setPopperTrigger(true);

            setTimeout(() => {
                setCurrentPage(prev => prev + 1);
                setIsAnimating(false);
                setPopperTrigger(false);
            }, 400);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 0 && !isAnimating) {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentPage(prev => prev - 1);
                setIsAnimating(false);
            }, 400);
        }
    };

    const getPageClass = (pageIndex) => {
        if (pageIndex === currentPage) return 'page-wrapper active';
        if (pageIndex < currentPage) return 'page-wrapper inactive-prev';
        return 'page-wrapper inactive-next';
    };

    return (
        <div className="wedding-container">
            {/* Audio Element with Fallbacks */}
            <audio ref={audioRef} loop preload="auto">
                <source src="/tamil-song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <div className="islamic-pattern" />
            {currentPage > 0 && <HeartBubbles />}
            <Popper trigger={popperTrigger} />

            {currentPage > 0 && (
                <button
                    className="back-button"
                    onClick={goToPrevPage}
                    disabled={currentPage === 0}
                >
                    <ChevronLeft size={24} />
                </button>
            )}

            {pages.map((Component, index) => (
                <div key={index} className={getPageClass(index)} onClick={index !== totalPages - 1 ? goToNextPage : undefined}>
                    <Component
                        isActive={currentPage === index}
                        onNext={goToNextPage}
                        isMuted={isMuted}
                        toggleMute={toggleMute}
                    />
                </div>
            ))}

            {currentPage < totalPages - 1 && (
                <div className="tap-indicator" onClick={goToNextPage}>
                    <ChevronDown size={20} />
                    <span>Tap to continue</span>
                </div>
            )}
        </div>
    );
}

export default Wedding;
