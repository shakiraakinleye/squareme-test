import {
  PaginationRoot,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationItems,
} from "@/components/ui/pagination";

import { ButtonGroup } from "@chakra-ui/react";

interface Props {
  page: number;
  setPage: (page: number) => void;
  pageLength: number;
  totalListLength: number;
}

const TransactionsFooter = ({
  page,
  setPage,
  pageLength,
  totalListLength,
}: Props) => {
  return (
    <div className="md:px-10 lg:px-16 md:py-6 2xl:px-20">
      <PaginationRoot
        count={totalListLength}
        pageSize={pageLength}
        defaultPage={1}
        page={page}
        onPageChange={(e) => setPage(e.page)}
        className="w-full flex justify-between gap-x-4"
      >
        <div className="flex items-center gap-x-1 font-inter text-xs lg:text-sm leading-4 tracking-normal text-muted-500">
          <span>Showing</span>
          <PaginationPageText format="long" flex="1" />
          <span>results</span>
        </div>

        <ButtonGroup attached variant="outline" size="sm" className="space-x-2">
          <PaginationPrevTrigger className="text-muted-300 border border-border-300" />

          <PaginationItems className="font-inter text-xs lg:text-sm leading-4 text-muted-300 border border-border-300  data-[state=active]:border-blue-400 data-[state=active]:text-blue-400" />

          <PaginationNextTrigger className="text-muted-300 border border-border-300" />
        </ButtonGroup>
      </PaginationRoot>
    </div>
  );
};

export default TransactionsFooter;
