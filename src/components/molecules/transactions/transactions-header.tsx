"use client";

import { useState } from "react";
import FilterSelect from "../filter-select";
import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";
import { DateRange } from "../dashboard/date-range";

const TransactionsHeader = () => {
  const initialRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const [ranges, setRanges] = useState([initialRange]);

  const filters = ["all accounts"];
  const [trxFilter, setTrxFilter] = useState<string[]>([filters[0]]);

  const ExportButton = () => {
    return (
      <Button
        className="py-2.5 px-4 gap-x-2 text-foreground-600 stroke-foreground-600 border border-border-300 rounded-lg bg-background-100"
        role="button"
        aria-label="export button"
      >
        <CloudUpload className="w-5 h-5" />
        <span className="capitalize font-medium font-inter text-xs xl:text-sm leading-4">
          export
        </span>
      </Button>
    );
  };

  return (
    <div
      className="w-full py-4 px-6 md:pl-10 lg:pl-16 md:py-6 2xl:pl-20 md:pr-8 2xl:pr-10 md:border-b-2 md:border-border-200 flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center md:justify-between"
      role="header"
      aria-label="transactions list header"
    >
      <div className="flex w-full md:w-fit items-center justify-between gap-x-2 ">
        <FilterSelect
          filterList={filters}
          currentFilter={trxFilter}
          setFilter={setTrxFilter}
          triggerClassName="border-none px-0 bg-inherit w-32 md:w-36 text-foreground-600 stroke-foreground-600 flex items-center text-base leading-normal"
        />
        <div className="md:hidden">
          <ExportButton />
        </div>
      </div>

      <div className=" w-full md:w-fit flex flex-col md:flex-row items-start md:items-center gap-2 lg:gap-3 ">
        <div className="w-full flex items-center gap-x-2 lg:gap-x-3 justify-between md:justify-start">
          <p className="text-zinc-500 font-inter font-medium text-sm lg:text-base leading-none">
            Select date range:
          </p>
          <DateRange ranges={ranges} setRanges={setRanges} />
        </div>
        <div className="hidden md:block">
          <ExportButton />
        </div>
      </div>
    </div>
  );
};

export default TransactionsHeader;
