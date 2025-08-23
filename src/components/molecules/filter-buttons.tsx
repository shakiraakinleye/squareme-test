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
    <div className="flex items-center gap-x-3">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => clickHandler(filter)}
          className={cx(
            "bg-inherit px-4 py-2 rounded-md border border-transparent font-light text-foreground-300 text-sm leading-4 tracking-normal capitalize transition",
            currentFilter === filter
              ? "bg-blue-200 font-medium"
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
