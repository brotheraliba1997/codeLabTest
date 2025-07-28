import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";





function ResponsiveChat({ data }: any) {
  return (
    <>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 40, right: 40, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEF1EF" stopOpacity={1} />
              <stop offset="100%" stopColor="#FEF1EF" stopOpacity={0.9} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={true}
            stroke="#ccc"
          />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12, fill: "#0F132499", fontWeight: 600 }}
          />
          <YAxis
            ticks={[0, 200, 400, 600]}
            domain={[0, 600]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#0F132499", fontWeight: 600 }}
          />
          <Tooltip
            cursor={{
              stroke: "#FE8F96",
              strokeDasharray: "4 4",
              strokeWidth: 2,
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#FE8F96"
            strokeWidth={2}
            fill="url(#areaColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default ResponsiveChat;
