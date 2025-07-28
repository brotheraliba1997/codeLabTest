import React from 'react'
import ToggleSwitch from './common/ToogleButton'

function JobsPostedCard({index, count, jobTitle, Application}:any) {
  return (
    <div
          key={index}
          className="bg-gradient-to-r from-[#F9DED3] to-[#FEF4EA]  rounded-[5px] flex gap-4 px-3 py-3 items-center justify-between"
        >
          <div className="flex gap-4">
            <div className="flex justify-center items-center bg-white py-2 px-3 rounded-[5px]">
              <h6 className=" font-medium text-[20px] text-[#14151A]">
                {count}{" "}
              </h6>
            </div>
            <div>
              <h6 className=" font-medium text-[14px] text-[#14151A]">
                {jobTitle}
              </h6>
              <p className=" font-medium text-[12px] text-[#0D112666] ">
                {Application}
              </p>
            </div>
          </div>

          <ToggleSwitch />
        </div>
  )
}

export default JobsPostedCard