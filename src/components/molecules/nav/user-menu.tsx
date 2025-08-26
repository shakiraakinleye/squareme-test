import Link from "next/link";
import { ButtonProps } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { User } from "@/types/user";
import { Button } from "@chakra-ui/react";
import { userMenuItems, UserMenuItemProps } from "@/data/navigation";
import { LogOut } from "lucide-react";

const UserCard = ({ user }: { user: User }) => {
  const { name, email } = user;

  return (
    <div className="bg-background-200 rounded-md border border-border-100 px-3 py-4 flex gap-x-2 items-center">
      <Avatar
        name={user.name}
        className="bg-avatar-100 text-white font-medium text-xxs leading-3 md:text-base md:leading-4 tracking-normal font-inter w-8 h-8 md:w-12 md:h-12"
        aria-label="user avatar"
        role="avatar"
      />
      <div className="space-y-0.5 font-inter">
        <p
          className="font-bold text-foreground-300 text-sm capitalize"
          role="label"
          aria-label="user name"
        >
          {name}
        </p>
        <p
          className="text-muted-100 text-xs"
          role="label"
          aria-label="user email"
        >
          {email}
        </p>
      </div>
    </div>
  );
};

interface ItemProps extends ButtonProps {
  item: UserMenuItemProps;
}

const MenuItem = ({ item, ...buttonProps }: ItemProps) => {
  const { title, icon, href } = item;
  const Icon = icon;

  return (
    <Button
      asChild
      className="w-full"
      {...buttonProps}
      role="button"
      aria-label="user menu item"
    >
      <Link
        href={href}
        className="p-0 w-full h-fit"
        onClick={(e) => e.preventDefault()}
      >
        <p className="w-full h-fit py-5 flex gap-x-4 items-center text-foreground-300 border-b border-border-300">
          <Icon className="md:w-4 md:h-4 xl:w-6 xl:h-6" />
          <span className="font-semibold text-sm font-inter capitalize">
            {title}
          </span>
        </p>
      </Link>
    </Button>
  );
};

const LogoutBtn = () => {
  const logout = () => {
    console.log("Logout clicked");
  };
  return (
    <Button
      asChild
      className="w-full block items-center justify-start p-0"
      onClick={logout}
      role="button"
      aria-label="logout button"
    >
      <p className="w-full h-fit py-5 flex gap-x-4 items-center text-red-500">
        <LogOut className="md:w-4 md:h-4 xl:w-6 xl:h-6" />
        <span className="font-semibold text-sm font-inter capitalize">
          logout
        </span>
      </p>
    </Button>
  );
};

interface Props {
  user: User;
}

const UserMenu = ({ user }: Props) => {
  return (
    <div
      className="bg-background-100 border border-border-300 pt-4 px-4 rounded-md overflow-hidden"
      role="menu"
      aria-label="user menu"
    >
      <UserCard user={user} />
      <div>
        {userMenuItems.map((item) => {
          return <MenuItem key={item.title} item={item} />;
        })}
        <LogoutBtn />
      </div>
    </div>
  );
};

export default UserMenu;
