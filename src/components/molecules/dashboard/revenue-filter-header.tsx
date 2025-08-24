import FilterSelect from "../filter-select";
import FilterButtons from "../filter-buttons";

interface Props {
  filters: string[];
  currentFilter: string[];
  setFilter: (value: string[]) => void;
}

const RevenueFilterHeader = ({ filters, currentFilter, setFilter }: Props) => {
  return (
    <div className="py-3 md:py-4 flex md:justify-between px-3 md:px-0" role="header" aria-label="revenue filter header">

      <div className="flex items-center justify-between gap-x-4 w-full md:w-fit font-inter leading-normal tracking-normal">
        <h3 className="md:hidden font-semibold text-lg text-foreground-500">Revenue</h3>
        <p className="hidden md:inline-block font-semibold text-sm text-zinc-500">Showing data for:</p>
        <FilterSelect filterList={filters} currentFilter={currentFilter} setFilter={setFilter} />
      </div>

      <div className="hidden md:flex">
        <FilterButtons filters={filters} currentFilter={currentFilter[0]} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default RevenueFilterHeader;
