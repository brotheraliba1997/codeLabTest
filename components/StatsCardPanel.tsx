import React from "react";
import GradientCircularProgress from "@/components/common/progressbar";
import { FiArrowUpRight } from "react-icons/fi";

function StatsCardPanel() {
  const StatsCardList = [
    {
      name: "Total Application",
      total: "5345",
      ratio: "+14%",
      value: 75,
    },

    {
      name: "Shortlisted candidates",
      total: "5345",
      ratio: "+14%",
      value: 24,
    },

    {
      name: "Rejected candidates",
      total: "5345",
      ratio: "+14%",
      value: 35,
    },
  ];
  return (
    <>
      <div className="w-full mt-20 mb-5 px-4">
        <div className="grid grid-cols-3 gap-4 justify-between items-center">
          {StatsCardList?.map((items, index) => (
            <div
              key={index}
              className="flex justify-between bg-[#FFFFFF] py-6 rounded-[10px] px-4"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-[#0D112666] font-medium text-[12px]">
                  {items?.name}
                </h2>

                <h2 className="text-[#14151A] font-bold text-[18px]">
                  {" "}
                  {items?.total}
                </h2>

                <div className="bg-[#D1FAE4] rounded-[5px] flex py-0.5 px-2 w-fit">
                  <h2 className="text-[#111C43] font-medium text-[12px] flex items-center">
                    <FiArrowUpRight /> {items?.ratio}
                  </h2>
                </div>
              </div>

              <GradientCircularProgress value={items?.value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StatsCardPanel;
