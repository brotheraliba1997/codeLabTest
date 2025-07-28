"use client";

import SubcriptionCard from "@/components/SubcriptionCard";
import BillingCycleSelector from "@/components/BillingCycleSelector";
import PlanToggleButtons from "@/components/PlanToggleButtons";
import { useState } from "react";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const subscriptionPlans = [
  {
    billingCycle: "Monthly",
    planTypes: [
      {
        planName: "Basic packages",
        tiers: [
          {
            tierName: "Business",
            originalPrice: 3000,
            discountedPrice: 2000,
            currency: "USD",
            platform: "Platform Features",
            details:
              "Email-based assistance for general queries and technical issues.",
            features: [
              {
                title: "Order Management",
                description: "Easily manage and track customer orders.",
                isAvailable: true,
              },

              {
                title: "Inventory Tracking",
                description: "Track your inventory in real time.",
                isAvailable: false,
              },
            ],

            platformfeatures: [
              {
                title: "Order Management",
                description: "Easily manage and track customer orders.",
                isAvailable: true,
              },

              {
                title: "Inventory Tracking",
                description: "Track your inventory in real time.",
                isAvailable: false,
              },
            ],
          },
          {
            tierName: "Enterprise",
            originalPrice: 6000,
            discountedPrice: 4500,
            platform: "Platform Features",
            currency: "USD",
            details:
              "Email-based assistance for general queries and technical issues.",
            features: [
              {
                title: "Multi-User Access",
                description: "Allow multiple users to manage your store.",
                isAvailable: true,
              },
              {
                title: "Priority Support",
                description: "Get 24/7 support from our team.",
                isAvailable: true,
              },
            ],

            platformfeatures: [
              {
                title: "Order Management",
                description: "Easily manage and track customer orders.",
                isAvailable: true,
              },

              {
                title: "Inventory Tracking",
                description: "Track your inventory in real time.",
                isAvailable: false,
              },
            ],
          },
        ],
      },
      {
        planName: "Pro packages",
        tiers: [
          {
            tierName: "Business",
            originalPrice: 4000,
            discountedPrice: 3000,
            platform: "Platform Features",
            currency: "USD",
            details:
              "Email-based assistance for general queries and technical issues.",
            features: [
              {
                title: "Advanced Analytics",
                description: "Get insights into your business performance.",
                isAvailable: true,
              },
            ],

            platformfeatures: [
              {
                title: "Order Management",
                description: "Easily manage and track customer orders.",
                isAvailable: true,
              },

              {
                title: "Inventory Tracking",
                description: "Track your inventory in real time.",
                isAvailable: false,
              },
            ],
          },
          {
            tierName: "Enterprise",
            originalPrice: 7000,
            discountedPrice: 5500,
            currency: "USD",
            platform: "Platform Features",
            details:
              "Email-based assistance for general queries and technical issues.",
            features: [
              {
                title: "All Pro Features + API Access",
                description: "Enterprise-grade tools and API integrations.",
                isAvailable: true,
              },
            ],

            platformfeatures: [
              {
                title: "Order Management",
                description: "Easily manage and track customer orders.",
                isAvailable: true,
              },

              {
                title: "Inventory Tracking",
                description: "Track your inventory in real time.",
                isAvailable: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    billingCycle: "Yearly",
    planTypes: [
      {
        planName: "Basic packages",
        tiers: [
          {
            tierName: "Business",
            originalPrice: 30000,
            discountedPrice: 24000,
            currency: "USD",
            features: [
              {
                title: "Multi-User Access",
                description: "Allow multiple users to manage your store.",
                isAvailable: true,
              },
              {
                title: "Priority Support",
                description: "Get 24/7 support from our team.",
                isAvailable: true,
              },
            ],
            platform: "Platform Features",
            details:
              "Email-based assistance for general queries and technical issues.",
            platformfeatures: [
              {
                title: "Order Management",
                description: "Easily manage and track customer orders.",
                isAvailable: true,
              },

              {
                title: "Inventory Tracking",
                description: "Track your inventory in real time.",
                isAvailable: false,
              },
            ],
          },
          {
            tierName: "Enterprise",
            originalPrice: 60000,
            discountedPrice: 48000,
            currency: "USD",
            platform: "Platform Features",
            details:
              "Email-based assistance for general queries and technical issues.",
            features: [
              {
                title: "Multi-User Access",
                description: "Allow multiple users to manage your store.",
                isAvailable: true,
              },
              {
                title: "Priority Support",
                description: "Get 24/7 support from our team.",
                isAvailable: true,
              },
            ],
            platformfeatures: [
              {
                title: "Order Management",
                description: "Easily manage and track customer orders.",
                isAvailable: true,
              },

              {
                title: "Inventory Tracking",
                description: "Track your inventory in real time.",
                isAvailable: false,
              },
            ],
          },
        ],
      },
      {
        planName: "Pro packages",
        tiers: [
          {
            tierName: "Business",
            originalPrice: 40000,
            discountedPrice: 32000,
            platform: "Platform Features",
            details:
              "Email-based assistance for general queries and technical issues.",
            features: [
              {
                title: "Multi-User Access",
                description: "Allow multiple users to manage your store.",
                isAvailable: true,
              },
              {
                title: "Priority Support",
                description: "Get 24/7 support from our team.",
                isAvailable: true,
              },
            ],
          },
          {
            tierName: "Enterprise",
            originalPrice: 70000,
            discountedPrice: 56000,
            platform: "Platform Features",
            details:
              "Email-based assistance for general queries and technical issues.",
            features: [
              {
                title: "Multi-User Access",
                description: "Allow multiple users to manage your store.",
                isAvailable: true,
              },
              {
                title: "Priority Support",
                description: "Get 24/7 support from our team.",
                isAvailable: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function PricingTabs() {
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const [selectedPlan, setSelectedPlan] = useState("Basic packages");

  const selectedCycle = subscriptionPlans.find(
    (cycle) => cycle.billingCycle === billingCycle
  );

  const currentPlan = selectedCycle?.planTypes.find(
    (plan) => plan.planName === selectedPlan
  );

  const MarketingTools = {
    key: "MarketingTools",
    ToolsList: [
      {
        name: "Basic email campaign templates",
        details: "Ready-to-use email designs for marketing and engagement.",
        Available: false,
        discountedPrice: 32000,
        amount: 0,

        currency: "USD",
      },

      {
        name: "Social media scheduler ",
        details: "Plan and publish posts across all major social platforms.",
        Available: false,
        amount: 300,
        currency: "USD",
      },

      {
        name: "Advanced segmentation",
        details: "Create targeted lists using customer behavior and data.",
        Available: false,
        amount: 500,
        currency: "USD",
      },

      {
        name: "Customer lifetime value tracking",
        details: "Analyze how much revenue each customer brings over time.",
        Available: false,
        amount: 500,
        currency: "USD",
      },

      {
        name: "Weekly performance reports",
        details: "Get automated weekly insights on store performance.",
        Available: false,
        amount: 500,
        currency: "USD",
      },
    ],
  };

  const billingCycles = ["Monthly", "Yearly"];

  return (
    <>
      <div className="lg:w-[75%] w-full mx-auto my-20 flex flex-col gap-8 px-4">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between w-full border-b border-[#E9EAEC] pb-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#14151A] font-medium text-[24px] ">
              Select subscription
            </h2>

            <p className="text-[#0F132499] font-medium text-[14px]">
              Select the package you think is good for your business.
            </p>
          </div>

          <div className="flex gap-4   ">
            <div className="flex h-fit bg-gradient-to-r from-[#F9DED3] to-[#FEF4EA] rounded-full  shadow ">
              {billingCycles.map((cycle, index) => (
                <BillingCycleSelector
                  cycle={cycle}
                  key={index}
                  setBillingCycle={setBillingCycle}
                  setSelectedPlan={setSelectedPlan}
                  billingCycle={billingCycle}
                />
              ))}
            </div>

            <button className=" px-4 py-2 border border-[#DEE0E3] rounded-full text-[14px] h-fit flex items-center gap-2 shadow w-fit">
              <RiMoneyDollarBoxLine />
              USD
              <IoIosArrowDown />
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          {selectedCycle?.planTypes.map((plan, index) => {
            const isSelected = selectedPlan === plan.planName;
            return (
              <PlanToggleButtons
                key={index}
                plan={plan}
                isSelected={isSelected}
                setSelectedPlan={setSelectedPlan}
              />
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {currentPlan?.tiers.map((tier: any, index: number) => (
            <SubcriptionCard
              key={`${billingCycle}-${selectedPlan}-${index}`}
              tierName={tier?.tierName}
              originalPrice={tier?.originalPrice}
              discountedPrice={tier?.discountedPrice}
              currency={tier?.currency}
              features={tier?.features}
              platform={tier?.platform}
              MarketingTools={MarketingTools}
              details={tier?.details}
              platformfeatures={tier?.platformfeatures}
              currentPlan={currentPlan}
            />
          ))}
        </div>
      </div>
    </>
  );
}
