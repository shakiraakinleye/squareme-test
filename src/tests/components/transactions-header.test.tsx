import { screen } from "@testing-library/react";
import TransactionsHeader from "@/components/molecules/transactions/transactions-header";
import { customRender } from "@/utils/test-utils";
import { user } from "@/utils/test-utils";

describe("Transactions List Header", () => {
  test("renders filter select trigger, date range display, and 2 export buttons (mobile and desktop)", async () => {
    customRender(<TransactionsHeader />);

    expect(
      await screen.findByRole("button", { name: /select trigger/i })
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("textbox", { name: /date range display/i })
    ).toBeInTheDocument();

    expect((await screen.findAllByRole("button", { name: /export button/i })).length).toEqual(2);
  });

  test("clicking filter select trigger displays select box", async () => {
    customRender(<TransactionsHeader />);

    const filterSelectTrigger = screen.getByRole("combobox");
    user.click(filterSelectTrigger);
    expect(await screen.findByRole("listbox")).toBeInTheDocument();
  });

  test("clicking date range display/trigger displays date picker", async () => {
    customRender(<TransactionsHeader />);

    const dateDisplay = await screen.findByRole("textbox", {
      name: /date range display/i,
    });
    user.click(dateDisplay);
    expect(
      await screen.findByRole("dialog", { name: /date range picker/i })
    ).toBeInTheDocument();
  });
});
