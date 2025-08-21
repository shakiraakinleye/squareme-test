"use client";

import { useState } from "react";
import IconButton from "@/components/atoms/icon-button";
import { Menu } from "lucide-react";
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerCloseTrigger,
} from "@/components/ui/drawer";
import SideNavigation from "../molecules/nav/side-navigation";

import React from "react";
import Logo from "@/components/atoms/logo";
import NavButtons from "../molecules/nav/nav-buttons";

interface SideNavDrawerProps {
  open: boolean;
  openHandler: () => void;
}

const SideNavDrawer = ({ open, openHandler }: SideNavDrawerProps) => {
  return (
    <DrawerRoot
      open={open}
      onOpenChange={openHandler}
      size="xs"
      placement="start"
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger className="stroke-foreground-200" />
        <SideNavigation />
      </DrawerContent>
    </DrawerRoot>
  );
};

// Add header here for back button

export const MobileSideNav = () => {
  const [open, setOpen] = useState(false);
  const sideNavDrawerHandler = () => {
    const state = !open;
    setOpen(state);
  };

  return (
    <>
      <IconButton
        icon={Menu}
        onClick={sideNavDrawerHandler}
        iconClassName="w-6 h-6 stroke-foreground-200"
      />
      <SideNavDrawer open={open} openHandler={sideNavDrawerHandler} />
    </>
  );
};

const MobileNavBar = () => {
  return (
    <nav className="w-full md:hidden bg-background-100 max--w-screen-2xl mx-auto">
      <div className="w-full flex md:hidden items-center justify-between py-4 px-6 border-b border-border-10">
        <MobileSideNav />
        <Logo />
        <NavButtons />
      </div>
    </nav>
  );
};

export default MobileNavBar;
