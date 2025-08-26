"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import TransactionsHeader from "../molecules/transactions/transactions-header";
import {
  TransactionsListDesktop,
  TransactionsListMobile,
} from "../molecules/transactions/transactions-list";
import TransactionsFooter from "../molecules/transactions/transactions-footer";
import { getTransactions } from "@/api/transactions";
import { useMediaQuery } from "@chakra-ui/react";
import { TransactionsListSkeleton } from "../molecules/skeleton/transaction-card";
import ErrorState from "../molecules/error-state";

export const TransactionsTable = ({ userId }: { userId: string }) => {
  const [isDesktop] = useMediaQuery(["(min-width: 768px)"]);
  const [page, setPage] = useState(1);
  const pageLimit = 6;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["transactions", userId, page],
    queryFn: () => getTransactions(userId, page, pageLimit),
    staleTime: 0,
    gcTime: 0,
  });

  return (
    <div className="space-y-6">
      <TransactionsHeader />

      {isPending && <TransactionsListSkeleton />}

      {isError && <ErrorState message={error.message} />}

      {data && (
        <>
          {isDesktop ? (
            <div>
              <TransactionsListDesktop transactions={data.transactions} />
              <TransactionsFooter
                page={page}
                setPage={setPage}
                pageLength={pageLimit}
                totalListLength={data.total}
              />
            </div>
          ) : (
            <TransactionsListMobile transactions={data.transactions} />
          )}
        </>
      )}
    </div>
  );
};

const TransactionsPage = () => {
  const user = useSelector((state: RootState) => state.user.value);

  if (!user) return <div>no user</div>;

  if (user) {
    const userId = user.id;
    return (
      <div className="w-full bg-background-100 md:bg-inherit">
        <TransactionsTable userId={userId} />
      </div>
    );
  }
};

export default TransactionsPage;
