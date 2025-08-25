import { screen, within } from "@testing-library/react";
import {
  TransactionsListDesktop,
  TransactionsListMobile,
} from "@/components/molecules/transactions/transactions-list";
import { customRender } from "@/utils/test-utils";
import { mockTransactions } from "./mock-data";

describe("Transactions List", () => {
  test("TransactionsListMobile renders only on mobile", () => {
    customRender(
      <TransactionsListMobile transactions={mockTransactions.transactions} />
    );
    const list = screen.getByTestId(/mobile transactions list/i);
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("md:hidden");
  });

  test("TransactionsListMobile renders only on desktop", () => {
    customRender(
      <TransactionsListDesktop transactions={mockTransactions.transactions} />
    );
    const list = screen.getByRole("list", {
      name: /desktop transactions list/i,
    });
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("hidden md:block");
  });
});

describe("Mobile Transactions List", () => {
  test("renders transaction cards", () => {
    customRender(
      <TransactionsListMobile transactions={mockTransactions.transactions} />
    );
    const cards = screen.getAllByRole("article", {
      name: /mobile transaction card/i,
    });
    expect(cards.length).toEqual(mockTransactions.transactions.length);
  });
});

describe("Desktop Transactions List", () => {
  test("renders transaction cards", () => {
    customRender(
      <TransactionsListDesktop transactions={mockTransactions.transactions} />
    );
    const cards = screen.getAllByRole("article", {
      name: /desktop transaction card/i,
    });
    expect(cards.length).toEqual(mockTransactions.transactions.length);
  });

  test("renders list header card and the cells", () => {
    customRender(
      <TransactionsListDesktop transactions={mockTransactions.transactions} />
    );

    const header = screen.getByRole("header", {
      name: /desktop transactions list header/i,
    });
    expect(header).toBeInTheDocument();

    const check = within(header).getByRole("cell", {
      name: /checkbox header/i,
    });
    expect(check).toBeInTheDocument();
    expect(within(check).getByRole("checkbox")).toBeInTheDocument();

    expect(
      within(header).getByRole("cell", { name: /amount header/i })
    ).toBeInTheDocument();

    expect(
      within(header).getByRole("cell", { name: /transaction id header/i })
    ).toBeInTheDocument();

    expect(
      within(header).getByRole("cell", { name: /transaction type header/i })
    ).toBeInTheDocument();

    expect(
      within(header).getByRole("cell", { name: /date header/i })
    ).toBeInTheDocument();

    expect(
      within(header).getByRole("cell", { name: /time header/i })
    ).toBeInTheDocument();

    expect(
      within(header).getByRole("cell", { name: /transaction status header/i })
    ).toBeInTheDocument();
  });
});
