"use client"

import { BsReception2 } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import ResponsiveChat from "./ResponsiveChat";

const data = [
  { time: "8AM", value: 200 },
  { time: "10AM", value: 200 },
  { time: "12PM", value: 300 },
  { time: "2PM", value: 250 },
  { time: "4PM", value: 250 },
  { time: "6PM", value: 250 },
  { time: "8PM", value: 300 },
];

const CustomAreaChart = () => {
  return (
    <div className=" mt-4 ml-4 mx-auto bg-white h-[400px]">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex gap-2">
          <BsReception2 className="text-[#D3ADA4]" />
          <p className="text-[16px] font-semibold">Application received time</p>
        </div>

        <div className="flex gap-2 items-center justify-between bg-[#0A0F290A]  rounded-md px-3 py-1.5 cursor-pointer shadow-sm">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-gray-500 text-[16px]" />
            <span className="text-sm text-gray-700 font-semibold"> Today</span>
          </div>
          <IoIosArrowDown className="text-gray-500 text-[16px]" />
        </div>
      </div>

      <ResponsiveChat data={data} />
    </div>
  );
};

export default CustomAreaChart;
