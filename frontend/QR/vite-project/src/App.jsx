import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode-generator";
import { Box, Typography, keyframes } from "@mui/material";
import FloatingBackground from "./components/FloatingBackground";
import TimerCircle from "./components/TimerCircle";
import QRDisplay from "./components/QRDisplay";
import "./App.css"

const INTERVAL = 15;

// Animated border gradient
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

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
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "#e8e8e8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingBackground />

      <Box
        sx={{
          textAlign: "center",
          p: 4,
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
          maxWidth: 500,
          width: "90%",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-1px",
            left: "-1px",
            right: "-1px",
            bottom: "-1px",
            background:
              "linear-gradient(45deg, #00d4ff, #0066cc, #004499, #00d4ff)",
            backgroundSize: "400% 400%",
            borderRadius: "25px",
            zIndex: -1,
            animation: `${gradientAnimation} 12s ease infinite`,
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 1,
            background: "linear-gradient(135deg, #00d4ff, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
            letterSpacing: "-0.02em",
          }}
        >
          QRTime
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            opacity: 0.8,
            mb: 4,
            fontWeight: 300,
            color: "#b8b8b8",
          }}
        >
          Live updating QR codes every {INTERVAL} seconds
        </Typography>

        <QRDisplay qrRef={qrContainerRef} isUpdating={isUpdating} />

        <TimerCircle countdown={countdown} progress={calculateProgress()} />
      </Box>
    </Box>
  );
}
