import cx from "classnames";
import { Button } from "@chakra-ui/react";

interface Props {
  filters: string[];
  currentFilter: string | null;
  setFilter: (value: string[]) => void;
}

const FilterButtons = ({ filters, currentFilter, setFilter }: Props) => {
  const clickHandler = (value: string) => {
    setFilter([value]);
  };

  return (
    <div className="flex items-center gap-x-2 xl:gap-x-3" role="list" aria-label="filter buttons list">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => clickHandler(filter)}
          className={cx(
            "bg-inherit !px-2.5 !py-1.5 rounded-md border border-transparent font-light text-foreground-300 text-xs xl:text-sm leading-4 tracking-normal capitalize transition",
            currentFilter === filter
              ? "!bg-blue-200 font-medium"
              : "bg-inherit hover:font-medium"
          )}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
