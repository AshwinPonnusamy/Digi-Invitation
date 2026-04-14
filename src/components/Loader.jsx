import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading-container">
        <div className="loading">
          <svg width="64px" height="48px">
            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back" />
            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front" />
          </svg>
        </div>
        <p className="loading-text">Love is in the air...</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #fffafb; // Light pinkish white for transition

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .loading-text {
    font-family: 'Outfit', sans-serif;
    color: #ff4d4f;
    font-weight: 500;
    letter-spacing: 0.1rem;
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .loading svg polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .loading svg polyline#back {
    fill: none;
    stroke: #ff4d5033;
  }

  .loading svg polyline#front {
    fill: none;
    stroke: #ff4d4f;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
  }

  @keyframes dash_682 {
    72.5% {
      opacity: 0;
    }

    to {
      stroke-dashoffset: 0;
    }
  }`;

export default Loader;
