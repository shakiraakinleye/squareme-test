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
    <ul className="hidden md:block w-full px-4 2xl:px-6 pt-6">
      <li className="w-full pl-2 pr-4 py-4 border-b border-border-200 grid grid-flow-row grid-cols-12 items-center font-inter text-xs leading-4 text-muted-400 font-semibold uppercase">
        <span className="col-span-1 flex items-center justify-center">
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
        <span className="col-span-2 flex items-center justify-center">
          Amount
        </span>
        <span className="col-span-2 flex items-center justify-center">
          Transaction ID
        </span>
        <span className="col-span-2 flex items-center justify-center">
          Transaction Type
        </span>
        <span className="col-span-2 flex items-center justify-center">
          Date
        </span>
        <span className="col-span-2 flex items-center justify-center">
          Time
        </span>
        <span className="col-span-1 flex items-center justify-center">
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
    <div className="w-full md:hidden px-6">
      <h4 className="font-inter font-semibold text-lg leading-normal tracking-normal text-gray-900 mb-4">
        Transactions
      </h4>

      <ul className="flex flex-col gap-y-4">
        {transactions.map((trx) => {
          return <TransactionCardMobile key={trx.transaction_id} trx={trx} />;
        })}
      </ul>
    </div>
  );
};

export { TransactionsListMobile, TransactionsListDesktop };
