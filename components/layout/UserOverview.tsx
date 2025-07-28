
import React from "react";

import UserProfile from "../UserProfile";
import PostedJobsPanel from "../PostedJobsPanel";
import RecentActivityPanel from "../RecentActivityPanel";

function UserOverview() {
  return (
    <>
      <div className="bg-[#FEFAF7]  w-[380px] fixed top-20 pb-24 bottom-20 right-0 overflow-auto h-full ">
        <div className="flex flex-col gap-4  px-6">
          <UserProfile />
          <hr className="text-[#C2A59D]" />
          <PostedJobsPanel />
          <hr className="text-[#C2A59D]" />
          <RecentActivityPanel />
        </div>
      </div>
    </>
  );
}

export default UserOverview;
