"use client";

import { useState } from "react";
import { Button, Popover } from "@chakra-ui/react";
import UserMenu from "./user-menu";
import { Avatar } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { User } from "@/types/user";

const UserMenuBtn = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root
      open={open}
      positioning={{
        placement: "bottom-end",
        offset: { mainAxis: 4, crossAxis: 4 },
      }}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Popover.Trigger asChild>
        <Button
          size="sm"
          variant="subtle"
          className="flex items-center gap-x-2 min-w-fit min-h-fit"
          aria-label="open user menu"
          role="button"
        >
          <Avatar
            name={user.name}
            className="bg-avatar-100 text-white font-medium text-xxs leading-3 md:text-base md:leading-4 tracking-normal font-inter w-8 h-8 md:w-12 md:h-12"
            aria-label="user avatar"
            role="avatar"
          />
          <ChevronDown
            width={8}
            className="hidden md:block fill-muted-100 stroke-muted-100 "
          />
        </Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content className="shadow-none">
          <UserMenu user={user} />
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};

export default UserMenuBtn;
