import React from "react";

import { CiSearch } from "react-icons/ci";

import Image from "next/image";

import user from "@/public/header/Avatar (1).png";

import { CiSettings } from "react-icons/ci";
import { PiWarningCircleBold } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

async function Header() {
  return (
    <div className="flex fixed w-[calc(100%-280px)] flex-1 z-10">
      <div className=" bg-[#FEFAF7] py-4 pl-4  w-[calc(100%-380px)]   ">
        <div className="flex justify-between   w-full ">
          <h2 className="text-[#111C43] font-medium text-[18px]">Dashboard</h2>

          <div className="bg-white cursor-pointer border border-[#0D112666] flex gap-2 items-center rounded-full py-1.5 px-2 h-[40px]">
            <button>
              {" "}
              <CiSearch className="text-[#0D112666] text-[20px]" />{" "}
            </button>
            <div>
              <input
                className="border-none focus:outline-none focus:ring-0 focus:border-transparent pr-24 "
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 pr-4 flex justify-end items-center gap-x-4 ">
        <button>
          <PiWarningCircleBold className="text-black text-[20px]" />{" "}
        </button>

        <button>
          <CiSettings className="text-black text-[20px]" />{" "}
        </button>

        <div className="flex gap-2">
          <button className="relative w-[32px] h-[32px] object-contain">
            <Image src={user} alt="user" layout="fill" />
          </button>
          <button className="pt-2">
            <FaAngleDown className="text-black text-[16px] " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
