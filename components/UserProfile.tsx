import Image from 'next/image'
import React from 'react'
import userProfile from "@/public/header/Avatar.png";
import { CiLocationOn } from "react-icons/ci";



function UserProfile() {
  return (
       <div className=" flex justify-center items-center flex-col gap-2">
          <div className="relative w-[117px] h-[117px] object-contain">
            <Image src={userProfile} alt="user" layout="fill" />
          </div>

          <h2 className="text-[#111C43] font-medium text-[18px]">John Doe</h2>
          <h2 className="text-[#0D112666] font-medium text-[12px]">
            Human Resource Manager
          </h2>
          <div className="flex gap-2 text-[#8A38F5]">
            <div>
              <CiLocationOn className=" text-[20px]" />{" "}
            </div>

            <h2 className=" font-medium text-[12px]">United Arab Emirates</h2>
          </div>
        </div>
  )
}

export default UserProfile