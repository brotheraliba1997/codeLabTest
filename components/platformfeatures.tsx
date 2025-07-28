import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

function Platformfeatures({items}:any) {
  return (
      <div className="flex flex-col gap-2 px-8">
                <div className="flex justify-between items-center ">
                  <h6 className=" font-medium text-[14px] text-[#14151A]">
                    {items?.title}
                  </h6>
                  <div className="flex gap-2 items-center">
                    <button className="bg-[#26BD6C] p-1 rounded-full text-white ">
                      <IoMdCheckmark />
                    </button>
                  </div>
                </div>

                <p className=" font-medium text-[12px] text-[#0F132499]">
                  {items?.description}
                </p>
              </div>
  )
}

export default Platformfeatures