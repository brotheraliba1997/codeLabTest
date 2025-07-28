"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GradientCircularProgress = ({ value }: any) => {
  return (
    <div style={{ width: 70, height: 70 }}>
      <CircularProgressbar
        value={value}
        text={`+${value}%`}
        styles={buildStyles({
          pathColor: `url(#gradient)`,
          textColor: "#333",
          trailColor: "#f0f0f0",
          strokeLinecap: "round",
        })}
      />
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FFB596" />
            <stop offset="100%" stopColor="#FE8F96" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientCircularProgress;
