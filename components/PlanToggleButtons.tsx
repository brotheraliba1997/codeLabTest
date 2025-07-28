import React from "react";

function PlanToggleButtons({ plan, isSelected, setSelectedPlan }:any) {
  return (
    <>
      <button
        key={plan.planName}
        onClick={() => setSelectedPlan(plan.planName)}
        className={`
          px-6 py-2 rounded-full border text-[14px] shadow transition-all duration-200
          ${
            isSelected
              ? " bg-gradient-to-r from-[#F9DED3] to-[#FEF4EA] text-gray-800"
              : "bg-white text-black"
          }
        `}
      >
        {plan.planName}
      </button>
    </>
  );
}

export default PlanToggleButtons;
