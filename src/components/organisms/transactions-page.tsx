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
import { getTransactions } from "@/api/user";
import { useMediaQuery } from "@chakra-ui/react";

const TransactionsTable = ({ userId }: { userId: string }) => {
  const [isDesktop] = useMediaQuery(["(min-width: 768px)"]);
  const [page, setPage] = useState(1);
  const { data, isPending, isError } = useQuery({
    queryKey: ["transactions", userId, page],
    queryFn: () => getTransactions(userId, page),
    staleTime: 0,
    gcTime: 0,
  });

  if (isPending) return <div>loading</div>;
  if (isError) return <div>error</div>;

  if (!data) return <div>no data</div>;

  if (data) {
    const transactions = data.transactions;
    const pageLength = data.per_page;
    const totalListLength = data.total;
    return (
      <div className="space-y-6">
        <TransactionsHeader />
        {isDesktop ? (
          <div>
            <TransactionsListDesktop transactions={transactions} />
            <TransactionsFooter
              page={page}
              setPage={setPage}
              pageLength={pageLength}
              totalListLength={totalListLength}
            />
          </div>
        ) : (
          <TransactionsListMobile transactions={transactions} />
        )}
      </div>
    );
  }
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
