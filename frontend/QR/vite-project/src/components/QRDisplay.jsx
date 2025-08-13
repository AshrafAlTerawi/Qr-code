import React from "react";
import { Box } from "@mui/material";

const QRDisplay = ({ qrRef, isUpdating }) => {
  const handleMouseEnter = () => {
    if (qrRef.current) {
      qrRef.current.style.transform = "translateY(-5px) scale(1.02)";
    }
  };

  const handleMouseLeave = () => {
    if (qrRef.current) {
      qrRef.current.style.transform = "translateY(0) scale(1)";
    }
  };

  return (
    <Box
      ref={qrRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        background: "#fff",
        p: 3,
        borderRadius: "16px",
        my: 4,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "1px solid rgba(0, 212, 255, 0.2)",
        ...(isUpdating && {
          transform: "scale(0.95) rotateY(10deg)",
          opacity: 0.7,
        }),
      }}
    >
      <Box id="qrcode" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 200 }} />
    </Box>
  );
};

export default QRDisplay;
