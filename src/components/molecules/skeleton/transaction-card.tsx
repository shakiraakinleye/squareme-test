import { Skeleton } from "@/components/ui/skeleton";

const DesktopCard = () => {
  return (
    <div className="pl-2 pr-4 py-4 border-b border-border-200 w-full flex items-center">
      <Skeleton variant="pulse" height={12} className="w-full " />
    </div>
  );
};

const DesktopListSkeleton = () => {
  return (
    <div className="hidden md:flex w-full bg-inherit p-8 flex-col justify-center ">
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
      <DesktopCard />
    </div>
  );
};

const MobileCard = () => {
  return (
    <div className="w-full rounded-md ">
      <Skeleton variant="pulse" height={40} className="w-full " />
    </div>
  );
};

const MobileListSkeleton = () => {
  return (
    <div className="w-full md:hidden bg-inherit p-8 flex flex-col gap-y-4 justify-center ">
      <MobileCard />
      <MobileCard />
      <MobileCard />
      <MobileCard />
    </div>
  );
};

const TransactionsListSkeleton = () => {
  return (
    <>
      <MobileListSkeleton />
      <DesktopListSkeleton />
    </>
  );
};
export { TransactionsListSkeleton };
