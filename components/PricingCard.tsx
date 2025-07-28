import React from "react";

function PricingCard({
  tierName,
  originalPrice,
  discountedPrice,
  additionalPrice,
  currency,
  details,
}: any) {
  return (
    <>
      <div className="flex justify-between items-center ">
        <h6 className=" font-medium text-[25px] text-[#14151A]">{tierName}</h6>
        <div className="flex gap-2 items-center">
          <p className="text-gray-500 line-through">Rs. {originalPrice}</p>
          <h6 className=" font-medium text-[30px] text-[#14151A]">
            {discountedPrice + additionalPrice}
          </h6>
          <p className="bg-[#E3EAFD] h-fit py-1 px-2 rounded-lg text-[12px]">
            {currency}
          </p>
        </div>
      </div>
      <p className=" font-medium text-[12px] text-[#0F132499]">{details}</p>
    </>
  );
}

export default PricingCard;
