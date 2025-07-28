import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import UserOverview from "@/components/layout/UserOverview";
import React from "react";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full w-screen flex">
      <Sidebar />

      <div className="bg-[#FEFAF7]  ml-[280px] w-[calc(100vw-290px)] h-full flex flex-col">
        <Header />
        <div className="w-full h-full  flex ">
          <div className=" mr-[360px] w-[calc(100vw-380px-280px)]  ">
            {children}
          </div>

          <UserOverview />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
