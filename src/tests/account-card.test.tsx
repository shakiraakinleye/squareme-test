import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import AccountCard from "@/components/molecules/dashboard/account-card";
import { mockUser } from "./mock-data";
import { user } from "@/utils/test-utils";

describe("Account Card", () => {
  test("renders account details title", () => {
    customRender(<AccountCard user={mockUser} />);
    expect(
      screen.getByRole("label", { name: /account details title/i })
    ).toBeInTheDocument();
  });

  test("renders bank name", () => {
    customRender(<AccountCard user={mockUser} />);

    const label = screen.getByRole("label", { name: /account bank name/i });
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(mockUser.accountDetails.bank);
  });

  test("renders account number", () => {
    customRender(<AccountCard user={mockUser} />);

    const label = screen.getByRole("label", { name: /account number/i });
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(mockUser.accountDetails.accountNumber);
  });

  test("renders account name", () => {
    customRender(<AccountCard user={mockUser} />);

    const label = screen.getByRole("label", { name: /account name/i });
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(mockUser.accountDetails.accountName);
  });

  test("renders copy button", () => {
    customRender(<AccountCard user={mockUser} />);

    expect(
      screen.getByRole("button", { name: /copy button/i })
    ).toBeInTheDocument();
  });

  test("clicking the copy button copies the account number to clipboard", async () => {
    customRender(<AccountCard user={mockUser} />);
    const copyButton = screen.getByRole("button", { name: /copy button/i });
    await user.click(copyButton);
    expect(await navigator.clipboard.readText()).toBe(mockUser.accountDetails.accountNumber);
  });
});
