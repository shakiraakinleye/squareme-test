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

export interface RevenueItem {
  timeframe: string;
  value: number;
}

export interface RevenueData {
  id: string;
  filter: RevenueFilter;
  data: RevenueItem[];
  growth: number;
  totalRevenue: number;
}
