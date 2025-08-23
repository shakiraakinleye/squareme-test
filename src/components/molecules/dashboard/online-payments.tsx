"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import RevenueCard from "./revenue-card";
import AccountCard from "./account-card";

const OnlinePaymentsDisplay = () => {
  const user = useSelector((state: RootState) => state.user.value);
  // if user == null, account card wont render
  if (!user) return <div>loading</div>;
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      <AccountCard user={user} />
      <RevenueCard userId={user.id} />
    </div>
  );
};

export default OnlinePaymentsDisplay;
