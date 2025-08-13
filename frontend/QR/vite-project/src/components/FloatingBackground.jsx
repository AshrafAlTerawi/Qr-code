import React from "react";
import { Box, keyframes } from "@mui/material";

// Keyframes for float animation (exact from CSS)
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const FloatingBackground = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {/* Floating element 1 */}
      <Box
        sx={{
          position: "absolute",
          width: 20,
          height: 20,
          top: "20%",
          left: "20%",
          background: "rgba(0, 212, 255, 0.1)",
          borderRadius: "50%",
          animation: `${floatAnimation} 8s ease-in-out infinite`,
          animationDelay: "0s",
        }}
      />
      {/* Floating element 2 */}
      <Box
        sx={{
          position: "absolute",
          width: 30,
          height: 30,
          top: "60%",
          right: "20%",
          background: "rgba(0, 212, 255, 0.1)",
          borderRadius: "50%",
          animation: `${floatAnimation} 8s ease-in-out infinite`,
          animationDelay: "2s",
        }}
      />
      {/* Floating element 3 */}
      <Box
        sx={{
          position: "absolute",
          width: 15,
          height: 15,
          bottom: "30%",
          left: "30%",
          background: "rgba(0, 212, 255, 0.1)",
          borderRadius: "50%",
          animation: `${floatAnimation} 8s ease-in-out infinite`,
          animationDelay: "4s",
        }}
      />
    </Box>
  );
};

export default FloatingBackground;
