import { Revenue, RevenueChartData, RevenueFilter } from "@/types/dashboard";

export const getPeriodRange = (filter: RevenueFilter) => {
  const now = new Date();
  let start: Date, prevStart: Date, prevEnd: Date;

  if (filter === "today") {
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    prevStart = new Date(start);
    prevStart.setDate(start.getDate() - 1);
    prevEnd = new Date(start);
    prevEnd.setDate(start.getDate() - 1);
  } else if (filter === "7 days") {
    start = new Date(now);
    start.setDate(now.getDate() - 6); 
    prevStart = new Date(start);
    prevStart.setDate(start.getDate() - 7);
    prevEnd = new Date(start);
    prevEnd.setDate(start.getDate() - 1);
  } else if (filter === "30 days") {
    start = new Date(now);
    start.setDate(now.getDate() - 29);
    prevStart = new Date(start);
    prevStart.setDate(start.getDate() - 30);
    prevEnd = new Date(start);
    prevEnd.setDate(start.getDate() - 1);
  } else if (filter === "quarter") {
    const quarter = Math.floor(now.getMonth() / 3);
    start = new Date(now.getFullYear(), quarter * 3, 1);
    prevStart = new Date(now.getFullYear(), (quarter - 1) * 3, 1);
    prevEnd = new Date(now.getFullYear(), quarter * 3, 0);
  } else {
    start = new Date(now.getFullYear(), 0, 1);
    prevStart = new Date(now.getFullYear() - 1, 0, 1);
    prevEnd = new Date(now.getFullYear() - 1, 11, 31);
  }

  return { start, prevStart, prevEnd };
};

export const sumRevenue = (revenues: Revenue[]) => {
  return revenues.reduce((sum, t) => sum + t.amount, 0);
};

export const groupRevenues = (
  revenues: Revenue[],
  filter: RevenueFilter
): RevenueChartData[] => {
  const grouped: Record<string, number> = {};

  revenues.forEach((revenue) => {
    const d = new Date(revenue.date);

    let key = "";
    if (filter === "year") {
      key = d.toLocaleString("default", { month: "long" });
    } else if (filter === "quarter") {
      const quarterStartMonth = Math.floor(d.getMonth() / 3) * 3;
      const quarterStart = new Date(d.getFullYear(), quarterStartMonth, 1);
      const weekNum = Math.ceil(
        (+d - +quarterStart) / (1000 * 60 * 60 * 24 * 7)
      );
      key = `W${weekNum}`;
    } else if (filter === "30 days") {
      const weekNum = Math.ceil(d.getDate() / 7);
      key = `W${weekNum}`;
    } else if (filter === "7 days" || filter === "today") {
      key = d.toLocaleString("default", { weekday: "short" });
    }

    grouped[key] = (grouped[key] || 0) + revenue.amount;
  });

  return Object.entries(grouped).map(([timeframe, value]) => ({
    timeframe,
    value,
  }));
};