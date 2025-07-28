import React from "react";

import StatsCardPanel from "@/components/StatsCardPanel";
import CustomAreaChart from "@/components/AllChartPanel/AreaChart";
import StackedBarChart from "@/components/AllChartPanel/StackedBarChart";



function page() {
  return (
    <>
      <StatsCardPanel />
      
<StackedBarChart />
     
      
      <CustomAreaChart />
    </>
  );
}

export default page;
