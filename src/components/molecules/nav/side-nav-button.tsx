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

interface SideNavDrawerProps {
  open: boolean;
  openHandler: () => void;
}

const SideNavDrawer = ({ open, openHandler }: SideNavDrawerProps) => {
  return (
    <DrawerRoot open={open} onOpenChange={openHandler} size="full">
      <DrawerBackdrop />
      <DrawerContent>
        Side Nav
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};


const SideNavButton = () => {
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

export default SideNavButton;
