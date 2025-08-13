import React from 'react';

const TimerCircle = ({ countdown, progress }) => {
  return (
    <div className="timer-container">
      <div className="timer-circle">
        <div
          className="timer-progress"
          style={{
            background: `conic-gradient(from 0deg, #00d4ff ${progress}deg, transparent ${progress}deg)`
          }}
        ></div>
        <span className="timer-text">{countdown}</span>
      </div>
      <div className="info-text">
        <div>Next update in</div>
        <div><strong>seconds</strong></div>
      </div>
    </div>
  );
};

export default TimerCircle;
