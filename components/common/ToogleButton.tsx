"use client";
import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div
        className={`w-9 h-4.5  ${
          isChecked ? "bg-[#FEFAF7] border border-[#F4C7AF]" : "bg-gray-300"
        }  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FEFAF7]  rounded-full peer-dark:bg-black peer-checked:bg-white transition-all duration-300`}
      ></div>
      <div
        className={`absolute w-4 h-4 ${
          isChecked ? "bg-[#F4C7AF]" : "bg-white"
        }  border border-gray-300 rounded-full transition-transform transform translate-x-0 peer-checked:translate-x-4.5 peer-checked:border-white`}
      ></div>
    </label>
  );
}
