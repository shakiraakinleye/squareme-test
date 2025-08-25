import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { RevenueFilterOptions } from "@/data/dashboard";

export interface Tab {
  id: string;
  title: string;
  query: string;
  disabled?: boolean;
  icon?: LucideIcon;
  content: ReactNode | null;
}

export type RevenueFilter =
  typeof RevenueFilterOptions[keyof typeof RevenueFilterOptions];

export interface Revenue {
  id: string;
  userId: string;
  amount: number;
  date: string;
}

export interface RevenueChartData {
  timeframe: string;
  value: number;
}

export interface RevenueStats {
  chart: RevenueChartData[];
  total: number;
  growth: number;
}
