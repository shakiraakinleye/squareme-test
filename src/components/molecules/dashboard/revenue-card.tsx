"use client";

import { useState } from "react";
import { getRevenueData } from "@/api/revenue";
import RevenueChart from "./revenue-chart";
import { useQuery } from "@tanstack/react-query";
import { currencyFormatter } from "@/utils/currency-formatter";
import RevenueFilterHeader from "./revenue-filter-header";
import { RevenueFilterOptions } from "@/data/dashboard";
import { RevenueFilter } from "@/types/dashboard";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorState from "../error-state";
import cx from "classnames";

interface Props {
  growthVal: number;
  totalRevenue: number;
  periodComparison: string;
}

export const ChartHeader = ({
  growthVal,
  totalRevenue,
  periodComparison,
}: Props) => {
  const isGrowthPos = growthVal >= 0;
  const formattedValue = currencyFormatter(totalRevenue, "NGN", "symbol");

  return (
    <div
      className="flex flex-col gap-y-2 md:gap-y-3 px-3 md:px-0"
      role="header"
      aria-label="revenue chart header"
    >
      <div className="flex items-center gap-x-0.5 font-inter text-xxs md:text-sm tracking-normal">
        <h4 className="font-bold text-foreground-400 mr-1">Revenue:</h4>
        <span
          className={cx(
            "font-inter text-xxs md:text-sm tracking-normal font-light leading-5",
            isGrowthPos ? "text-green-400" : "text-red-400"
          )}
        >
          {isGrowthPos ? "+" : "-"}
          {growthVal.toFixed(1)}
        </span>
        <span className="text-muted-100">vs</span>
        <span className="text-muted-100 capitalize">{periodComparison}</span>
      </div>

      <div className="flex items-center gap-x-2 font-inter tracking-normal">
        <h3 className="font-bold text-lg md:text-3xl leading-5 md:leading-9 text-foreground-400">
          {formattedValue}
        </h3>
        <p className="text-xxs md:text-sm leading-5 text-foreground-300">
          in total value
        </p>
      </div>
    </div>
  );
};

const RevenueCard = ({ userId }: { userId: string }) => {
  const filters: RevenueFilter[] = Object.values(RevenueFilterOptions);
  const [filter, setFilter] = useState<string[]>([filters[filters.length - 1]]);

  const { data, isPending, isError } = useQuery({
    queryKey: ["revenue", userId, filter],
    queryFn: () => getRevenueData(userId, filter[0] as RevenueFilter),
  });
 
  return (
    <div
      role="article"
      aria-label="revenue card"
      className="flex flex-col gap-y-3 md:gap-y-4 md:px-6 md:pb-6 border-2 border-border-200 rounded-md"
    >
      <RevenueFilterHeader
        filters={filters}
        currentFilter={filter}
        setFilter={setFilter}
      />

      {isPending && (
        <div className="w-full h-full p-2 md:p-4 flex items-center justify-center">
          <Skeleton height="400px" className="w-full rounded-lg" />
        </div>
      )}

      {isError && (
        <div className="w-full h-full flex items-center justify-center">
          <ErrorState message="Something went wrong. Please, reload page" />
        </div>
      )}

      {data && (
        <div className="md:px-7 md:py-8 bg-background-100 flex flex-col gap-y-4 md:gap-y-8 md:border-2 md:border-border-200 md:rounded-md">
          <ChartHeader
            growthVal={data.growth ?? 0}
            totalRevenue={data.total ?? 0}
            periodComparison="Last 7 days"
          />
          {!data || data.chart.length === 0 ? (
            <div className="text-base md:text-lg text-gray-500 p-4 text-center">
              No records available
            </div>
          ) : (
            <RevenueChart data={data.chart} />
          )}
        </div>
      )}
    </div>
  );
};

export default RevenueCard;
