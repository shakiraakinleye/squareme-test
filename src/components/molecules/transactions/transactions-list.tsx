import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Transaction } from "@/types/transactions";
import {
  TransactionCardMobile,
  TransactionCardDesktop,
} from "./transaction-card";
import { CheckboxCheckedChangeDetails } from "@chakra-ui/react";

const TransactionsListDesktop = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const initialValues = transactions.map((trx) => {
    return {
      ...trx,
      checked: false,
    };
  });
  const [values, setValues] = useState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((item, index) => {
    const checkHandler = (e: CheckboxCheckedChangeDetails) => {
      setValues((current) => {
        const newValues = [...current];
        newValues[index] = {
          ...newValues[index],
          checked: !!e.checked,
        };
        return newValues;
      });
    };

    return (
      <TransactionCardDesktop
        key={index}
        trx={item}
        checkHandler={checkHandler}
      />
    );
  });

  return (
    <ul
      className="hidden md:block w-full px-4 2xl:px-6 pt-6"
      role="list"
      aria-label="desktop transactions list"
      data-testid="desktop transactions list"
    >
      <li
        className="w-full pl-2 pr-4 py-2 border-b border-border-200 grid grid-flow-row grid-cols-12 gap-x-2 items-start font-inter text-xs text-center leading-4 text-muted-400 font-semibold uppercase"
        role="header"
        aria-label="desktop transactions list header"
      >
        <span
          className="col-span-1 flex items-center justify-center"
          role="cell"
          aria-label="checkbox header"
        >
          <Checkbox
            checked={indeterminate ? "indeterminate" : allChecked}
            onCheckedChange={(e) => {
              setValues((current) =>
                current.map((value) => ({ ...value, checked: !!e.checked }))
              );
            }}
            variant="outline"
            colorPalette="gray"
            size="sm"
            className="border bg-background-200 border-border-400 rounded-md"
          />
        </span>
        <span
          className="col-span-2 flex items-center justify-center"
          role="cell"
          aria-label="amount header"
        >
          Amount
        </span>
        <span
          className="col-span-2 flex items-center justify-center"
          role="cell"
          aria-label="transaction id header"
        >
          Transaction ID
        </span>
        <span
          className="col-span-2 flex items-center justify-center"
          role="cell"
          aria-label="transaction type header"
        >
          Transaction Type
        </span>
        <span
          className="col-span-2 flex items-center justify-center"
          role="cell"
          aria-label="date header"
        >
          Date
        </span>
        <span
          className="col-span-1 flex items-center justify-center"
          role="cell"
          aria-label="time header"
        >
          Time
        </span>
        <span
          className="col-span-2 flex items-center justify-center"
          role="cell"
          aria-label="transaction status header"
        >
          Status
        </span>
      </li>

      <ul className="border border-border-200 rounded-lg overflow-hidden bg-background-100">
        {items}
      </ul>
    </ul>
  );
};

const TransactionsListMobile = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div
      className="w-full md:hidden px-6 pb-10"
      data-testid="mobile transactions list"
    >
      <h4 className="font-inter font-semibold text-lg leading-normal tracking-normal text-gray-900 mb-4">
        Transactions
      </h4>

      <ul
        className="flex flex-col gap-y-4"
        role="list"
        aria-label="mobile transactions list"
      >
        {transactions.map((trx) => {
          return <TransactionCardMobile key={trx.transaction_id} trx={trx} />;
        })}
      </ul>
    </div>
  );
};

export { TransactionsListMobile, TransactionsListDesktop };
