"use client";

import { sideNavigation } from "@/data/navigation";
import { NavItem } from "@/types/navigation";
import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";

const NavListItem = ({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: boolean;
}) => {
  const { icon: Icon, label, href } = item;
  return (
    <li
      className={cx(
        "w-full group",
        isActive ? "md:bg-accent-100" : "md:hover:bg-blue-200"
      )}
      role="listitem"
      aria-label="side navigation list item"
    >
      <Link
        className={cx(
          "flex w-full py-2 md:py-3.5 px-6 md:px-8 items-center gap-x-2 md:gap-x-3 stroke-grey-100 text-grey-100",
          isActive
            ? "md:stroke-white md:text-white"
            : "group-hover:text-accent-100 group-hover:stroke-accent-100 md:group-hover:stroke-grey-100 md:group-hover:text-grey-100"
        )}
        href={href}
      >
        <Icon strokeWidth={1.5} className="w-6 h-6 stroke-inherit" />
        <span className="text-base leading-normal -tracking-wide text-inherit">
          {label}
        </span>
      </Link>
    </li>
  );
};

const SideNavigation = () => {
  const pathname = usePathname();
  return (
    <div
      className="bg-background-100 h-full w-full py-12 md:py-6 lg:py-8"
      role="navigation"
      aria-label="side navigation"
    >
      <ul
        className="w-full flex flex-col gap-y-2 md:gap-y-0.5"
        role="list"
        aria-label="side navigation list"
      >
        {sideNavigation.map((item) => {
          const isActive = item.href === pathname;
          return <NavListItem key={item.id} isActive={isActive} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default SideNavigation;
// todo: adjust height for desktop and mobile
