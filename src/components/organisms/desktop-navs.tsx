import SideNavigation from "../molecules/nav/side-navigation";
import React from "react";
import Logo from "@/components/atoms/logo";
import NavButtons from "../molecules/nav/nav-buttons";

const DesktopSideNav = () => {
  return (
    <div className="hidden md:block w-64 min-h-screen md:border-r md:border-border-100r">
      <SideNavigation />
    </div>
  );
};

const DesktopNavBar = () => {
  return (
    <nav className="hidden md:block w-full bg-background-100 max--w-screen-2xl mx-auto">
      <div className="hidden md:w-full md:flex md:items-center md:justify-between md:py-4 md:px-6 lg:px-8 border-b border-border-100">
        <Logo />
        <NavButtons />
      </div>
    </nav>
  );
};

export { DesktopNavBar, DesktopSideNav };
