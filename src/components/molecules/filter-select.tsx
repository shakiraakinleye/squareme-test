"use client";

import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectRoot,
  SelectTrigger,
  SelectItem,
  SelectValueText,
} from "@/components/ui/select";
import { useMediaQuery } from "@chakra-ui/react";

interface FilterSelectProps {
  filterList: string[];
  currentFilter: string[];
  setFilter: (value: string[]) => void;
}

const FilterSelect = ({
  filterList,
  currentFilter,
  setFilter,
}: FilterSelectProps) => {
  const list = createListCollection({
    items: filterList,
  });
  const [isDesktop] = useMediaQuery(["(min-width: 768px)"]);

  return (
    <SelectRoot
      collection={list}
      width={isDesktop ? "150px" : "120px"}
      value={currentFilter}
      onValueChange={(e) => setFilter(e.value)}
      positioning={{ placement: "left" }}
    >
      <SelectTrigger className="border border-border-300 rounded-3xl md:rounded-lg bg-background-100 flex items-center text-zinc-500 stroke-zinc-500 px-3">
        <SelectValueText className="font-inter font-semibold text-xs md:text-sm leading-5 tracking-normal capitalize" />
      </SelectTrigger>
      <SelectContent className="bg-white w-56">
        {list.items.map((item) => (
          <SelectItem
            item={item}
            key={item}
            className="text-foreground-200 text-xs md:text-sm capitalize"
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default FilterSelect;
