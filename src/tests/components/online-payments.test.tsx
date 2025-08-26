import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import OnlinePaymentsDisplay from "@/components/molecules/dashboard/online-payments";

describe("Online Payments Tab Content", () => {
  test("renders online payment tab contents; the account and revenue cards", () => {
    customRender(<OnlinePaymentsDisplay />);
    const accountCard = screen.getByRole("article", { name: /account card/i });
    const revenueCard = screen.getByRole("article", { name: /revenue card/i });
    expect(accountCard).toBeInTheDocument();
    expect(revenueCard).toBeInTheDocument();
  });
});
