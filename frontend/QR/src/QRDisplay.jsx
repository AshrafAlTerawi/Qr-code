import React from 'react';

const QRDisplay = ({ qrRef, isUpdating }) => {
  const handleMouseEnter = () => {
    if (qrRef.current) {
      qrRef.current.style.transform = 'translateY(-5px) scale(1.02)';
    }
  };

  const handleMouseLeave = () => {
    if (qrRef.current) {
      qrRef.current.style.transform = 'translateY(0) scale(1)';
    }
  };

  return (
    <div
      className={`qr-container ${isUpdating ? 'updating' : ''}`}
      ref={qrRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div id="qrcode"></div>
    </div>
  );
};

export default QRDisplay;
