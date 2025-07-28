import React from "react";


function BillingCycleSelector({
  cycle,
  setBillingCycle,
  setSelectedPlan,
  billingCycle,
}:any) {
  return (
    <>
      <button
        key={cycle}
        onClick={() => {
          setBillingCycle(cycle);
          setSelectedPlan("Basic packages");
        }}
        className={`px-6 py-2 rounded-full text-[14px]  transition-all duration-200 ${
          billingCycle === cycle
            ? "bg-white font-semibold "
            : "bg-transparent text-gray-700"
        }`}
      >
        {cycle}
        {cycle === "Yearly" && (
          <span
            className={`${
              billingCycle === cycle ? " bg-[#0A0F2914]" : " bg-[#EDFDF4]"
            }   px-1 py-0.5 ml-2 rounded-sm text-[12px] text-[#0F132499]`}
          >
            Save 10%
          </span>
        )}
      </button>


     
    </>
  );
}

export default BillingCycleSelector;
