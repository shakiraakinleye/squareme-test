import { screen } from "@testing-library/react";
import { TransactionsTable } from "@/components/organisms/transactions-page";
import { customRender } from "@/utils/test-utils";
import { mockUser } from "./mock-data";
import { mockMatchMedia } from "@/utils/test-utils";

describe("Transactions Page", () => {
  test("page renders with header", () => {
    customRender(<TransactionsTable userId={mockUser.id} />);
    expect(
      screen.getByRole("header", { name: /transactions list header/i })
    ).toBeInTheDocument();
  });

  test("page renders with list", async () => {
    customRender(<TransactionsTable userId={mockUser.id} />);
    expect(
      await screen.findByRole("list", { name: /transactions list/i })
    ).toBeInTheDocument();
  });

  test("page does not render footer on mobile", async () => {
    customRender(<TransactionsTable userId={mockUser.id} />);
    expect(
      screen.queryByRole("footer", { name: /transactions list footer/i })
    ).not.toBeInTheDocument();
  });

  test("page renders footer on desktop", async () => {
    mockMatchMedia(768);
    customRender(<TransactionsTable userId={mockUser.id} />);
    expect(
      await screen.findByRole("footer", { name: /transactions list footer/i })
    ).toBeInTheDocument();
  });
});
