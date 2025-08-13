import React from "react";
import { Box, Typography } from "@mui/material";

const TimerCircle = ({ countdown, progress }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 3 }}>
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "rgba(0, 212, 255, 0.1)",
          border: "2px solid rgba(0, 212, 255, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: "1.2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: `conic-gradient(from 0deg, #00d4ff ${progress}deg, transparent ${progress}deg)`,
            transition: "background 1s ease",
          }}
        />
        <Typography sx={{ position: "relative", zIndex: 1 }}>{countdown}</Typography>
      </Box>

      <Box sx={{ fontSize: "0.9rem", opacity: 0.7, fontWeight: 300, color: "#c8c8c8" }}>
        <div>Next update in</div>
        <div>
          <strong>seconds</strong>
        </div>
      </Box>
    </Box>
  );
};

export default TimerCircle;
