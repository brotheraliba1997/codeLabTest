import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

function MarketingToolsPanel({
  MarketingTools,
  toggleMarketingTool,
  toggleMarketingCancel,
  index,
}: any) {
  return (
    <div>
      <h6 className=" font-medium text-[14px] text-[#14151A] py-2 px-8  bg-[#0A0F290A]">
        {MarketingTools?.key}
      </h6>

      {MarketingTools?.ToolsList?.map((mark: any, marketIndex: number) => (
        <div
          key={marketIndex}
          className={`flex flex-col gap-4 px-8 ${
            mark?.Available && "border-b pb-4"
          } `}
        >
          <div className="flex flex-col gap-2  pt-4">
            <div className="flex justify-between items-center ">
              <h6 className=" font-medium text-[14px] text-[#14151A]">
                {mark?.name}
              </h6>
              <div className="flex gap-2 items-center">
                {mark?.Available ? (
                  <button className="bg-[#26BD6C] p-1 rounded-full text-white">
                    <IoMdCheckmark />
                  </button>
                ) : (
                  <button
                    disabled={index}
                    onClick={(e) => toggleMarketingTool(e, marketIndex)}
                    className={`bg-[#FAB005] p-1 rounded-full text-white `}
                  >
                    <IoMdAdd />
                  </button>
                )}
              </div>
            </div>

            <p className=" font-medium text-[12px] text-[#0F132499]">
              {mark?.details}
            </p>
          </div>
          {mark?.Available && (
            <div className="flex justify-between items-center ">
              <button
                onClick={() => toggleMarketingCancel(marketIndex)}
                className="  text-[14px] rounded-full text-[#E6483D] "
              >
                <CiCircleMinus className="text-[24px]" />
              </button>
              <div className="flex gap-4">
                <p className="text-gray-500 line-through">
                  {mark?.discountedPrice}
                </p>
                <p className="text-black">{mark?.amount > 0 && mark?.amount}</p>
                <p className="bg-[#0A0F2914] h-fit py-0.5 px-2 rounded-md text-[12px]">
                  {mark?.currency}
                </p>

                <p className="bg-[#E3EAFD] h-fit py-0.5  px-2 rounded-md text-[12px]">
                  INCLUDE
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MarketingToolsPanel;
