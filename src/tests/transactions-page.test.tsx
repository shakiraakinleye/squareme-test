import { screen } from "@testing-library/react";
import { TransactionsTable } from "@/components/organisms/transactions-page";
import { customRender } from "@/utils/test-utils";
import { mockUser } from "../mocks/data";

describe("Transactions Page", () => {
  test("page renders with header", () => {
    customRender(<TransactionsTable userId={mockUser.id} />);
    expect(
      screen.getByRole("header", { name: /transactions list header/i })
    ).toBeInTheDocument();
  });

  test("page does not render footer on mobile", async () => {
    customRender(<TransactionsTable userId={mockUser.id} />);
    expect(
      screen.queryByRole("footer", { name: /transactions list footer/i })
    ).not.toBeInTheDocument();
  });

  test("page renders mobile list skeleton", async () => {
    customRender(<TransactionsTable userId={mockUser.id} />);
    const list = await screen.findByRole("article", {
      name: /mobile transaction list loading/i,
    });
    expect(list).toBeInTheDocument();
  });
  
  test("page renders desktop list skeleton", async () => {
    customRender(<TransactionsTable userId={mockUser.id} />);
    const list = await screen.findByRole("article", {
      name: /desktop transaction list loading/i,
    });
    expect(list).toBeInTheDocument();
  });

});
