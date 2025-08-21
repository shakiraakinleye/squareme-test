import { sideNavigation } from "@/data/navigation";
import { NavItem } from "@/types/navigation";
import Link from "next/link";
import cx from "classnames";

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
        "w-full group md:hover:bg-blue-200",
        isActive && "md:bg-accent-100"
      )}
    >
      <Link
        className={cx(
          "flex w-full py-2 md:py-3.5 px-6 md:px-8 items-center gap-x-2 md:gap-x-3 stroke-grey-100 text-grey-100 group-hover:text-accent-100 group-hover:stroke-accent-100 md:group-hover:stroke-grey-100 md:group-hover:text-grey-100",
          isActive && "md:stroke-white md:text-white"
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
  const isActive = false;
  return (
    <div className="bg-background-100 h-full w-full py-12 md:py-6 lg:py-8">
      <ul className="w-full flex flex-col gap-y-2 md:gap-y-0.5">
        {sideNavigation.map((item) => (
          <NavListItem key={item.id} isActive={isActive} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
// todo: adjust height for desktop and mobile
