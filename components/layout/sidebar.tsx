import Link from "next/link";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoFileDirectory } from "react-icons/go";
import { LuUsersRound } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { BsReception2 } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="h-full w-[280px] bg-[#F8E6DD] fixed">
      <h1 className="text-center text-[#111C43] font-semibold py-4 text-[25px]">
        Sample Logo
      </h1>

      <div className="w-[60%] mx-auto">
        <Link href="/dashboard" className="flex gap-2 items-center ">
          <div>
            {" "}
            <MdOutlineDashboard />{" "}
          </div>
          <h6 className="text-center text-[#111C43] font-semibold py-4 text-[14px]">
            Dashboard 
          </h6>
        </Link>

        <Link href="#" className="flex gap-2 items-center ">
          <div>
            {" "}
            <PiBagSimpleBold />{" "}
          </div>
          <h6 className="text-center text-[#111C43] font-semibold py-4 text-[14px]">
            Jobs
          </h6>
        </Link>

        <Link href="#" className="flex gap-2 items-center ">
          <div>
            <FaRegCalendarAlt />{" "}
          </div>
          <h6 className="text-center text-[#111C43] font-semibold py-4 text-[14px]">
            Schedule
          </h6>
        </Link>

        <Link href="#" className="flex gap-2 items-center ">
          <div>
            <GoFileDirectory />{" "}
          </div>
          <h6 className="text-center text-[#111C43] font-semibold py-4 text-[14px]">
            Document
          </h6>
        </Link>

        <Link href="#" className="flex gap-2 items-center ">
          <div>
            <BsReception2 />{" "}
          </div>
          <h6 className="text-center text-[#111C43] font-semibold py-4 text-[14px]">
            Statistics
          </h6>
        </Link>

        <Link href="#" className="flex gap-2 items-center ">
          <div>
            <LuUsersRound />{" "}
          </div>
          <h6 className="text-center text-[#111C43] font-semibold py-4 text-[14px]">
            Community
          </h6>
        </Link>

        <Link href="#" className="flex gap-2 items-center ">
          <div>
            <LuMessageCircle />
          </div>
          <h6 className="text-center text-[#111C43] font-semibold py-4 text-[14px]">
            Messages
          </h6>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
