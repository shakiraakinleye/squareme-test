import { Transaction } from "@/types/transactions";

export const getTransactions = async (
  userId: string,
  page: number,
  limit: number
) => {
  const res = await fetch(
    `https://68acccfeb996fea1c08aeb78.mockapi.io/squareme/transactions?userId=${userId}&page=${page}&limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const transactions: Transaction[] = await res.json();

  const totalRes = await fetch(
    `https://68acccfeb996fea1c08aeb78.mockapi.io/squareme/transactions?userId=${userId}`
  );
  const all: Transaction[] = await totalRes.json();
  const total = all.length;

  return { transactions, total };
};
