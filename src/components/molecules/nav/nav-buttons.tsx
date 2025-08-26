"use client";

import IconButton from "@/components/atoms/icon-button";
import { Bell } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import UserMenuBtn from "./user-menu-button";

const NavButtons = () => {
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <div
      className="w-fit flex items-center gap-x-2 md:gap-x-4"
      aria-label="navigation buttons"
      role="list"
    >
      <IconButton
        icon={Bell}
        iconClassName="stroke-foreground-200"
        tooltip="Notifictaion"
        role="button"
        aria-label="notifications button"
      />
      {user && <UserMenuBtn user={user} />}
    </div>
  );
};

export default NavButtons;
