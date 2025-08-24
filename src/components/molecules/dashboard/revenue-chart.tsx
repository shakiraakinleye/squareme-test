"use client";

import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { RevenueItem } from "@/types/dashboard";
import { formatK } from "@/utils/number-formatter";
import { useMediaQuery } from "@chakra-ui/react";

const RevenueChart = ({ data }: { data: RevenueItem[] }) => {
  const chart = useChart({
    data,
    series: [{ name: "value", color: "yellow.400" }],
  });

  const [isDesktop] = useMediaQuery(["(min-width: 768px)"]);

  return (
    <Chart.Root maxH="xs" chart={chart} role="chart" aria-label="revenue chart"> 
      <BarChart data={chart.data}>
        <CartesianGrid stroke={chart.color("gray.200")} vertical={false} />›
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("timeframe")}
          tickFormatter={(value) => value.slice(0, isDesktop ? 3 : 2)}
          padding={{ left: 0, right: 0 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(val) => formatK(Number(val))}
          width={40}
        />
        {/* <Tooltip
          cursor={{ fill: chart.color("bg.white") }}
          animationDuration={0}
          content={<Chart.Tooltip />}
        /> */}
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name as keyof RevenueItem}
            dataKey={chart.key(item.name) as keyof RevenueItem}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            barSize={20}
            className="rounded-t-xl"
          />
        ))}
      </BarChart>
    </Chart.Root>
  );
};

export default RevenueChart;

// todo: fix tooltip, rounded etc