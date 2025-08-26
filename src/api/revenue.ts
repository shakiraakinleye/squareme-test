import { RevenueStats, Revenue, RevenueFilter } from "@/types/dashboard";
import {
  getPeriodRange,
  sumRevenue,
  groupRevenues,
} from "@/utils/revenue-chart-utils";

export async function getRevenueData(
  userId: string,
  filter: RevenueFilter
): Promise<RevenueStats> {
  const response = await fetch(
    `https://68acccfeb996fea1c08aeb78.mockapi.io/squareme/revenues?userId=${userId}`
  );
  if (!response.ok) throw new Error("Failed to fetch revenue data");

  const revenues: Revenue[] = await response.json();
  const { start, prevStart, prevEnd } = getPeriodRange(filter);

  const isWithin = (date: Date, from: Date, to?: Date) =>
    to ? date >= from && date <= to : date >= from;

  // Current & previous period transactions
  const currentRevenues = revenues.filter((r) =>
    isWithin(new Date(r.date), start)
  );
  const prevRevenues = revenues.filter((r) =>
    isWithin(new Date(r.date), prevStart, prevEnd)
  );

  // Totals
  const total = sumRevenue(currentRevenues);
  const prevTotal = sumRevenue(prevRevenues);

  // Growth %
  const growth =
    prevTotal === 0 ? 100 : ((total - prevTotal) / prevTotal) * 100;

  return {
    chart: groupRevenues(currentRevenues, filter),
    total,
    growth: Number(growth.toFixed(2)),
  };
}
