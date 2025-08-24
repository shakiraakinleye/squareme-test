import { RevenueData } from "@/types/dashboard";

export const getRevenueData = async (userId: string, filter: string) => {
  console.log(userId, filter);
  // const res = await fetch(
  //   `https://api.fake.com/?userId=${userId}&data=${revenue}&filter=${filter}`
  // );

  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const data = await res.json();

  const data: RevenueData = {
    id: "monthly",
    filter: "last year",
    growth: 0,
    totalRevenue: 1500000,
    data: [
      { timeframe: "January", value: 320000 },
      { timeframe: "February", value: 420000 },
      { timeframe: "March", value: 480000 },
      { timeframe: "April", value: 510000 },
      { timeframe: "May", value: 490000 },
      { timeframe: "June", value: 550000 },
      { timeframe: "July", value: 510000 },
      { timeframe: "August", value: 200000 },
      { timeframe: "September", value: 780000 },
      { timeframe: "October", value: 350000 },
      { timeframe: "November", value: 190000 },
      { timeframe: "December", value: 480000 },
    ],
  };
  return data;
};
