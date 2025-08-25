import { Badge } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import cx from "classnames";
import { TransactionStatus } from "@/types/transactions";

const StatusBadge = ({ status }: { status: TransactionStatus | string }) => {
  const statusColors = {
    processed: {
      bg: "bg-success-100",
      border: "border-success-200",
      text: "text-success-300",
      dot: "stroke-success-200 fill-success-200",
    },
    pending: {
      bg: "bg-pending-100",
      border: "border-pending-200",
      text: "text-pending-300",
      dot: "stroke-pending-200 fill-pending-200",
    },
    failed: {
      bg: "bg-error-100",
      border: "border-error-200",
      text: "text-error-300",
      dot: "stroke-error-200 fill-error-200",
    },
    default: {
      bg: "bg-gray-200",
      border: "border-gray-400",
      text: "text-gray-700",
      dot: "stroke-gray-400 fill-gray-400",
    },
  };

  const colors =
    statusColors[status as TransactionStatus] ?? statusColors.default;

  return (
    <Badge
      className={cx(
        "w-full flex items-center justify-center px-2.5 py-1.5 border rounded-full",
        colors.bg,
        colors.border,
        colors.text
      )}
    >
      <GoDotFill
        className={cx("w-2 h-2 2xl:w-3 2xl:h-3 shrink-0", colors.dot)}
      />
      <span
        className={cx(
          "capitalize font-inter text-xxs leading-4 lg:text-xs 2xl:text-sm 2xl:leading-5 tracking-normal",
          colors.text
        )}
      >
        {status}
      </span>
    </Badge>
  );
};

export default StatusBadge;
