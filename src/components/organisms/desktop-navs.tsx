import SideNavigation from "../molecules/nav/side-navigation";
import React from "react";
import Logo from "@/components/atoms/logo";
import NavButtons from "../molecules/nav/nav-buttons";

const DesktopSideNav = () => {
  return (
    <div
      className="hidden md:block w-48 xl:w-64 min-h-screen md:border-r md:border-border-100"
      role="navigation"
      aria-label="desktop side navigation"
    >
      <SideNavigation />
    </div>
  );
};

const DesktopNavBar = () => {
  return (
    <nav
      className="hidden md:flex w-full bg-background-100 mx-auto"
      role="navigation"
      aria-label="desktop navigation bar"
    >
      <div className="w-full flex items-center justify-between md:py-4 md:px-6 lg:px-8 border-b border-border-100">
        <Logo />
        <NavButtons />
      </div>
    </nav>
  );
};

export { DesktopNavBar, DesktopSideNav };
