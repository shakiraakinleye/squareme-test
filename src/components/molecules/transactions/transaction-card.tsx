import { Checkbox } from "@/components/ui/checkbox";
import StatusBadge from "@/components/atoms/status-badge";
import { Transaction } from "@/types/transactions";
import { currencyFormatter } from "@/utils/currency-formatter";
import { formatDate, formatTime } from "@/utils/datetime-formatter";
import { CheckboxCheckedChangeDetails } from "@chakra-ui/react";

interface checkedTrx extends Transaction {
  checked: boolean;
}

interface Props {
  trx: checkedTrx;
  checkHandler: (e: CheckboxCheckedChangeDetails) => void;
}

const TransactionCardDesktop = ({ trx, checkHandler }: Props) => {
  const {
    transaction_id,
    amount,
    transaction_type,
    date,
    time,
    status,
    checked,
  } = trx;
  const formattedAmount = currencyFormatter(amount, "NGN", "symbol");
  const formattedDate = formatDate(date, "short");
  const formattedTime = formatTime(time, "12h");

  return (
    <li className="w-full pl-2 pr-4 py-4 border-b border-border-200 grid grid-flow-row grid-cols-12 items-center font-inter text-xs xl:text-sm leading-5 text-muted-300">
      <span className="col-span-1 flex items-center justify-center">
        <Checkbox
          key={transaction_id}
          checked={checked}
          onCheckedChange={checkHandler}
          variant="outline"
          colorPalette="gray"
          size="sm"
          className="border bg-background-200 border-border-400 rounded-md"
        />
      </span>
      <span className="col-span-2 flex items-center justify-center text-foreground-300">
        {formattedAmount}
      </span>
      <span className="col-span-2 flex items-center justify-center">
        {transaction_id}
      </span>
      <span className="col-span-2 flex items-center justify-center">
        {transaction_type}
      </span>
      <span className="col-span-2 flex items-center justify-center">
        {formattedDate}
      </span>
      <span className="col-span-2 flex items-center justify-center">
        {formattedTime}
      </span>
      <span className="col-span-1 flex items-center justify-center">
        <StatusBadge status={status} />
      </span>
    </li>
  );
};

const TransactionCardMobile = ({ trx }: { trx: Transaction }) => {
  const { amount, transaction_type, date, time, status } = trx;

  const formattedAmount = currencyFormatter(amount, "NGN", "symbol");
  const formattedDate = formatDate(date, "short");
  const formattedTime = formatTime(time, "12hCompact");

  return (
    <div className="flex flex-col bg-background-100 border-2 border-border-200 rounded-md px-2 font-inter uppercase text-xxs leading-6 tracking-tighter text-muted-300 ">
      <p className="flex items-center justify-between gap-x-2 p-2 border-b border-border-200">
        <span className="">amount:</span>
        <span>{formattedAmount}</span>
      </p>
      <p className="flex items-center justify-between gap-x-2 p-2 border-b border-border-200">
        <span className="">transaction type:</span>
        <span>{transaction_type}</span>
      </p>
      <p className="flex items-center justify-between gap-x-2 p-2 border-b border-border-200">
        <span className="">date:</span>
        <span>
          {formattedDate}, {formattedTime}
        </span>
      </p>
      <div className="flex items-center justify-between gap-x-2 p-2 border-b border-border-200">
        <span className="">status:</span>
        <span>
          <StatusBadge status={status} />
        </span>
      </div>
    </div>
  );
};

export { TransactionCardMobile, TransactionCardDesktop };
