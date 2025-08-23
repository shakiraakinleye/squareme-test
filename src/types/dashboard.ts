import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface Tab {
  id: string;
  title: string;
  query: string;
  disabled?: boolean;
  icon?: LucideIcon;
  content: ReactNode | null;
}

