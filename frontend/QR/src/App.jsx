import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode-generator";
import QRDisplay from "./QRDisplay.jsx";
import TimerCircle from "./TimerCircle.jsx";
import FloatingBackground from "./FloatingBackground.jsx";
import "./App.css";

const INTERVAL = 15;
export default function DynamicQRGenerator() {
  const [countdown, setCountdown] = useState(INTERVAL);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const qrContainerRef = useRef(null);

  const qrData = [
    "https://example.com/page1",
    "Welcome to Dynamic QR Generator!",
    "https://github.com/explore",
    "Scan me for a surprise!",
    "QR Code #" + Math.floor(Math.random() * 1000),
    "https://stackoverflow.com",
    "Dynamic content updates every 30s",
    "https://developer.mozilla.org",
    "Professional QR Solutions",
    "Contact: info@example.com",
  ];

  const generateQR = (text) => {
    try {
      const qr = QRCode(0, "M");
      qr.addData(text);
      qr.make();

      if (qrContainerRef.current) {
        qrContainerRef.current.innerHTML = qr.createImgTag(6, 8);

        const img = qrContainerRef.current.querySelector("img");
        if (img) {
          img.style.borderRadius = "10px";
          img.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
          img.alt = "QR code";
        }
      }
    } catch (err) {
      console.error("QR generation failed:", err);
    }
  };

  const pulseAnimation = () => {
    if (!qrContainerRef.current) return;
    qrContainerRef.current.classList.add("pulse");
    setTimeout(() => qrContainerRef.current?.classList.remove("pulse"), 1000);
  };

  useEffect(() => {
    generateQR(qrData[0]);
    setCurrentIndex(0);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsUpdating(true);

          setTimeout(() => {
            setCurrentIndex((prevIdx) => {
              const next = (prevIdx + 1) % qrData.length;
              generateQR(qrData[next]);
              pulseAnimation();
              setIsUpdating(false);
              return next;
            });
          }, 400);

          return INTERVAL;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateProgress = () => ((INTERVAL - countdown) / INTERVAL) * 360;

  return (
    <div className="app">
      <FloatingBackground />

      <div className="container">
        <h1 className="title">QRTime</h1>
        <p className="subtitle">
          Live updating QR codes every {INTERVAL} seconds
        </p>

        <QRDisplay qrRef={qrContainerRef} isUpdating={isUpdating} />

        <TimerCircle countdown={countdown} progress={calculateProgress()} />
      </div>
    </div>
  );
}
