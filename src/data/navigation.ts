import {
  Globe,
  LayoutDashboard,
  Wallet,
  RefreshCw,
  FileText,
  Settings,
  User,
  LockKeyhole,
  KeyRound,
  LucideIcon,
} from "lucide-react";

// SIDE NAVIGATION ITEMS
export const sideNavigation = [
  {
    id: 1,
    label: "Get Started",
    icon: Globe,
    href: "/get-started",
    // href: "",
  },
  {
    id: 2,
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    id: 3,
    label: "Accounts",
    icon: Wallet,
    href: "/accounts",
    // href: "",
  },
  {
    id: 4,
    label: "Transfers",
    icon: RefreshCw,
    href: "/transfers",
    // href: "",
  },
  {
    id: 5,
    label: "Transactions",
    icon: FileText,
    href: "/transactions",
  },
  {
    id: 6,
    label: "Settings",
    icon: Settings,
    href: "/settings",
    // href: "",
  },
];

// USER MENU ITEMS
export interface UserMenuItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  disabled?: boolean;
}

export const userMenuItems: UserMenuItemProps[] = [
  {
    title: "profile",
    icon: User,
    href: "",
  },
  {
    title: "change password",
    icon: LockKeyhole,
    href: "",
  },
  {
    title: "2 - factor authentication",
    icon: KeyRound,
    href: "",
  },
];
