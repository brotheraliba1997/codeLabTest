

import { LuActivity } from "react-icons/lu";
import { RiArrowTurnBackLine } from "react-icons/ri";
import { LuFolderInput } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";




function RecentActivityPanel() {

  const RecentActivityList = [
    {
      icon: <RiArrowTurnBackLine /> ,
      jobTitle: " Your subscription expires today Renew now",
    },

    {
      icon: <LuFolderInput />,
      jobTitle: "There are 4 new applications for Lead Python Developer post",
    },

    {
      icon: <ImCancelCircle />,
      jobTitle: "You have closed the job for Sr UI/UX Developer",
    },

    {
      icon: <LuFolderInput />,
      jobTitle: "You have drafted a job for Sr UI/UX Designer.",
    },
  ];


  const getBadgeClass = (index: number) => {
  if (index === 0) return "bg-[#E5E2FF]/60 text-[#674FC7]";
  if (index === 1) return "bg-[#FFEFC4]/60 text-[#FFCB48]";
  if (index === 2) return "bg-[#FEEBED] text-[#FF0019CC]";
  if (index === 3) return "bg-[#EDFDF4] text-[#26BD6C]";
  return ""; // default class if index doesn't match
};
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h6 className=" font-medium text-[16px] text-[#14151A]">
          Recent Activity
        </h6>
        <div className="flex justify-center items-center p-2 rounded-full bg-gradient-to-r from-[#F9DED3] to-[#FEF4EA] border border-[#FEF3E9]">
          <LuActivity />
        </div>
      </div>

      {RecentActivityList?.map((items: any, index: number) => (
        <div
          key={index}
          className="  rounded-[5px] flex gap-4  py-2 items-center"
        >
          <div className={`flex justify-center items-center ${getBadgeClass(index)}  p-4 rounded-[10px]`}>
            <h6 className=" font-semibold text-[20px] ">
              {items?.icon}{" "}
            </h6>
          </div>
          <div>
            <h6 className=" font-medium text-[14px] text-[#14151A]">
              {items?.jobTitle}
            </h6>
            <p className=" font-medium text-[12px] text-[#14151A] ">
              {items?.Application}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivityPanel;
