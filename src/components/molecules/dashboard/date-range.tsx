import {
  RangePicker,
  DateRangeProps,
  RangeType,
} from "@/components/atoms/date-range-picker";
import {
  PopoverTrigger,
  PopoverRoot,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { formatDate } from "@/utils/datetime-formatter";

export const DateRangeDisplay = ({ ranges }: { ranges: RangeType[] }) => {
  const startDate = ranges[0].startDate;
  const endDate = ranges[0].endDate;

  return (
    <div className="flex items-center justify-start gap-x-2 lg:gap-x-3 w-[200px] lg:w-[250px]" role="textbox" aria-label="date range display">
      <CalendarDays
        strokeWidth={1.5}
        className="w-4 h-4 lg:w-5 lg:h-5 stroke-zinc-500"
      />
      <p className="flex items-center just-between text-zinc-500 font-inter font-medium text-xs lg:text-sm leading-5 lg:leading-6 tracking-normal">
        {formatDate(startDate, "short")} - {formatDate(endDate, "short")}
      </p>
    </div>
  );
};

export const DateRange = ({ ranges, setRanges }: DateRangeProps) => {
  return (
    <PopoverRoot
      positioning={{ placement: "bottom" }}
      closeOnEscape={true}
      closeOnInteractOutside={true}
    >
      <PopoverTrigger className="border border-border-300 bg-background-100 rounded-lg px-3 lg:px-4 py-2 lg:py-2.5">
        <DateRangeDisplay ranges={ranges} />
      </PopoverTrigger>
      <PopoverContent className="border border-border-300 rounded-lg overflow-hidden relative w-fit" aria-label="date range picker">
        <RangePicker ranges={ranges} setRanges={setRanges} />
      </PopoverContent>
    </PopoverRoot>
  );
};
