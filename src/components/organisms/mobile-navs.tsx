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
      role="dialog"
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger className="stroke-foreground-200" aria-label="close mobile side navigation" />
        <SideNavigation />
      </DrawerContent>
    </DrawerRoot>
  );
};

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
        role="button"
        aria-label="open mobile side navigation"
      />
      <SideNavDrawer open={open} openHandler={sideNavDrawerHandler} />
    </>
  );
};

const MobileNavBar = () => {
  return (
    <nav className="w-full md:hidden bg-background-100 max--w-screen-2xl mx-auto" role="navigation" aria-label="mobile navigation bar">
      <div className="w-full flex md:hidden items-center justify-between py-4 px-6 border-b border-border-10">
        <MobileSideNav />
        <Logo />
        <NavButtons />
      </div>
    </nav>
  );
};

export default MobileNavBar;
