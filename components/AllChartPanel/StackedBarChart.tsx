"use client";
import React from "react";
import dynamic from "next/dynamic";
import { BsReception2 } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import ToggleSwitch from "../common/ToogleButton";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BuildingStackChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      height: 400,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10%",
        borderRadius: 4,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Wed", "Wed", "Wed", "Wed", "Wed", "Wed", "Wed"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    colors: ["#007bff", "#ffc107", "#dc3545"],
    legend: { show: false },
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false, // show dotted base line
        },
      },
      strokeDashArray: 4, // <-- this makes it dotted
      borderColor: "#999999", // optional: change dot color
    },
  };

  const series = [
    {
      name: "Blue Part",
      data: [10, 12, 8, 15, 10, 14, 9],
    },
    {
      name: "Yellow Part",
      data: [5, 7, 4, 6, 5, 5, 3],
    },
    {
      name: "Red Part",
      data: [3, 4, 2, 5, 2, 3, 2],
    },
  ];

  return (
    <div className=" ml-4  py-4 bg-white ">
      <div className="flex justify-between items-center px-8">
        <div className="flex gap-2">
          <BsReception2 className="text-[#D3ADA4]" />
          <p className="text-[16px] font-semibold">Application received time</p>
        </div>

        <div className="flex gap-2 items-center justify-between bg-[#0A0F290A]  rounded-md px-3 py-1.5 cursor-pointer shadow-sm">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-gray-500 text-[16px]" />
            <span className="text-sm text-gray-700 font-semibold">
              {" "}
              last 7 days
            </span>
          </div>
          <IoIosArrowDown className="text-gray-500 text-[16px]" />
        </div>
      </div>

      <Chart options={options} series={series} type="bar" height={400} />
      <div className="flex  gap-8 px-8">
        <div className="flex gap-2">
            <ToggleSwitch /> 
            <p className="text-[14px]">Applications</p>
        </div>

        <div className="flex gap-2">
            <ToggleSwitch /> 
            <p className="text-[14px]">Shortlisted</p>
        </div>

        <div className="flex gap-2">
            <ToggleSwitch /> 
            <p className="text-[14px]">Rejected</p>
        </div>

        <div className="flex gap-2">
            <ToggleSwitch /> 
            <p className="text-[14px]">On hold</p>
        </div>
        
       
       
      </div>
    </div>
  );
};

export default BuildingStackChart;
