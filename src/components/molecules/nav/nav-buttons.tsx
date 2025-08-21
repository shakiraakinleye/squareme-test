"use client";

import IconButton from "@/components/atoms/icon-button";
import { Bell } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { ChevronDown } from "lucide-react";

const NavButtons = () => {
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <div className="w-fit flex items-center gap-x-2 md:gap-x-4">
      <IconButton
        icon={Bell}
        iconClassName="stroke-foreground-200"
        tooltip="Notifictaion"
        aria-label="Notifications Button"
      />
      {user && (
        <Button
          className="flex items-center gap-x-2 pointer-events-none min-w-fit min-h-fit"
          aria-label="Account Settings"
        >
          {/* disabled pointer events since there is no menu to open */}
          <Avatar
            name={user.name}
            className="bg-avatar-100 text-white font-medium text-xxs leading-3 md:text-base md:leading-4 tracking-normal font-inter w-8 h-8 md:w-12 md:h-12"
          />
          <ChevronDown
            width={8}
            className="hidden md:block fill-muted-100 stroke-muted-100 "
          />
        </Button>
      )}
    </div>
  );
};

export default NavButtons;
