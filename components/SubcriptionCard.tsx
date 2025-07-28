"use client";
import React, {  useState } from "react";
import MarketingToolsPanel from "./MarketingToolsPanel";
import PricingCard from "./PricingCard";
import FeaturesCard from "./FeaturesCard";
import Platformfeatures from "./platformfeatures";

function SubcriptionCard({
  tierName,
  originalPrice,
  discountedPrice,
  MarketingTools,
  platform,
  currency,
  features,
  details,
  platformfeatures,
  
}: any) {
  const [data, setData] = useState(MarketingTools);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleMarketingTool = (e: any, index: any) => {
    e.stopPropagation();

    if (index === activeIndex + 1) {
      setActiveIndex((prev) => prev + 1);

      const updatedToolsList = data?.ToolsList?.map((x: any, i: any) =>
        i === index ? { ...x, Available: true } : x
      );
      setData({ ...data, ToolsList: updatedToolsList });

      setAdditionalPrice(
        updatedToolsList
          .filter((x: any) => x.Available)
          .reduce((a: any, b: any) => a + b?.amount, 0)
      );
    }
  };

  const toggleMarketingCancel = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex((prev) => prev - 1);

      const updatedToolsList = data?.ToolsList?.map((x: any, i: any) =>
        i === index ? { ...x, Available: false } : x
      );
      setData({ ...data, ToolsList: updatedToolsList });

      setAdditionalPrice(
        updatedToolsList
          .filter((x: any) => x.Available)
          .reduce((a: any, b: any) => a + b?.amount, 0)
      );
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#F9DED3] to-[#FEF4EA]  py-4 rounded-lg">
        <div className=" flex flex-col gap-2   border-b border-[#F9E9DE] pb-4 px-8">
          <PricingCard
            tierName={tierName}
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            additionalPrice={additionalPrice}
            currency={currency}
            details={details}
          />
        </div>

        <div className="flex flex-col gap-4 pt-2">
          {features?.map((items: any, index:number) => (
            <FeaturesCard items={items} key={index} />
          ))}

          <h6 className=" font-medium text-[14px] text-[#14151A] py-2  px-8 bg-[#0A0F290A]">
            {platform}
          </h6>

          {platformfeatures?.map((items: any, index:number) => (
            <Platformfeatures items={items} key={index}  />
          ))}

          <MarketingToolsPanel
            MarketingTools={data}
            toggleMarketingTool={toggleMarketingTool}
            toggleMarketingCancel={toggleMarketingCancel}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </>
  );
}

export default SubcriptionCard;
