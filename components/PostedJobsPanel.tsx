import JobsPostedCard from "./JobsPostedCard";
import { IoMdAdd } from "react-icons/io";

function PostedJobsPanel() {
  interface jobPosted {
    count: number;
    jobTitle: string;
    Application: string;
  }
  const JobsPostedList = [
    {
      count: 15,
      jobTitle: " Sr. UI/UX Designer",
      Application: "Total application",
    },

    {
      count: 15,
      jobTitle: " Sr. UI/UX Designer",
      Application: "Total application",
    },

    {
      count: 15,
      jobTitle: "Lean Python Developer",
      Application: "Total application",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h6 className=" font-medium text-[16px] text-[#14151A]">Jobs Posted</h6>
        <div className="flex items-center justify-center px-4 py-1.5 gap-2 bg-gradient-to-r from-[#F9DED3] to-[#FEF4EA] border border-[#FAE4D9] rounded-full shadow cursor-pointer">
          <IoMdAdd />
          <p className=" font-medium text-[14px] text-[#14151A] ">Add</p>
        </div>
      </div>

      {JobsPostedList?.map((items: jobPosted, index: number) => (
        <JobsPostedCard
          key={index}
          count={items?.count}
          jobTitle={items?.jobTitle}
          Application={items?.Application}
        />
      ))}
    </div>
  );
}

export default PostedJobsPanel;
