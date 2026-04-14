import React, { useState, useEffect, useRef } from 'react'
import './index.css'
import LandingPage from './components/LandingPage'
import Loader from './components/Loader'
import DesktopRestriction from './components/DesktopRestriction'

function App() {
  const [view, setView] = useState('landing');
  const [isMobile, setIsMobile] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleEnter = () => {
    setView('loading');
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (view === 'loading') {
      const timer = setTimeout(() => {
        setView('card');
      }, 2500); // Show loader for 2.5 seconds
      return () => clearTimeout(timer);
    }
    
    if (view === 'card' && audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Delayed audio playback failed:", err);
      });
    }
  }, [view]);

  if (!isMobile) {
    return <DesktopRestriction />;
  }

  const renderContent = () => {
    if (view === 'landing') {
      return <LandingPage onEnter={handleEnter} />;
    }

    if (view === 'loading') {
      return <Loader />;
    }

    return (
      <div className="wedding-card-container">
        {/* Music Toggle Button */}
        <button className="music-toggle" onClick={toggleMute}>
          {isMuted ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>

        {/* Background elements */}
        <div className="card-background" />
        
        {/* Ornaments */}
        <img src="/assets/floral-corner.png" className="ornament ornament-tl" alt="Corner Decoration" />
        <img src="/assets/floral-vertical.png" className="ornament ornament-tr" alt="Floral vine" />
        <img src="/assets/plant.png" className="ornament ornament-bl" alt="Corner Decoration" />
        <img src="/assets/floral-corner.png" className="ornament ornament-br" alt="Corner Decoration" />

        <div className="wedding-card-inner">
          {/* Header Section */}
          <section className="animate-fade-in delay-1">
            <h1 className="title-main">Save The Date</h1>
          </section>

          {/* Center Illustration */}
          <div className="center-image-container animate-fade-in delay-1">
            <img src="/assets/rings.png" className="rings-image" alt="Wedding Rings" />
          </div>

          {/* Names & Invite Text */}
          <section className="animate-fade-in delay-2" style={{ textAlign: 'center' }}>
            <h2 className="names-heading">Ashwin & Boomika</h2>
            <p className="invite-text">
              Invite you to celebrate their <br />
              <strong>wedding</strong>
            </p>
          </section>

          {/* Details Section */}
          <section className="details-grid animate-fade-in delay-2">
            {/* Day & Time */}
            <div className="detail-item">
              <span className="detail-label">Time</span>
              <span className="detail-value">Friday</span>
              <span className="detail-sub-value">08:00 AM</span>
            </div>

            {/* Date */}
            <div className="detail-item detail-item-center">
              <span className="detail-label">Date</span>
              <span className="detail-value date-large">29</span>
            </div>

            {/* Month & Year */}
            <div className="detail-item">
              <span className="detail-label">Month</span>
              <span className="detail-value">May</span>
              <span className="detail-sub-value">2026</span>
            </div>
          </section>

          {/* Location Section */}
          <section className="location-container animate-fade-in delay-3">
            <a 
              href="https://maps.app.goo.gl/1EykmNd3GiDZ3otP9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="location-link"
            >
              <div className="location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <p className="location-text">
                Vediyarasampalayam, Pallipalayam,<br />
                Namakkal, 638008
              </p>
            </a>
            <div className="separator" />
          </section>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Background Music - Rendered globally to ensure audioRef is connected from the start */}
      <audio 
        ref={audioRef} 
        src="/assets/audio/bgm.mp3" 
        loop 
      />
      {renderContent()}
    </>
  );
}

export default App

