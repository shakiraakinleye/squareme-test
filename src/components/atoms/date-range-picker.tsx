import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "@/styles/react-date-picker.css";

export interface RangeType {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface DateRangeProps {
  ranges: RangeType[];
  setRanges: (ranges: RangeType[]) => void;
}

export const RangePicker = ({ ranges, setRanges }: DateRangeProps) => {
  const changeHandler = (e) => {
    setRanges([e.selection]);
  };

  return (
    <DateRangePicker
      ranges={ranges}
      onChange={changeHandler}
      moveRangeOnFirstSelection={false}
      rangeColors={["#3182CE"]}
      showDateDisplay={false}
    />
  );
};
