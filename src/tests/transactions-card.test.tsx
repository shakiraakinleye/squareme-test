import { screen, within } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import { mockTransactions } from "../mocks/data";
import {
  TransactionCardMobile,
  TransactionCardDesktop,
} from "@/components/molecules/transactions/transaction-card";
import { currencyFormatter } from "@/utils/currency-formatter";
import { formatTime, formatDate } from "@/utils/datetime-formatter";

describe("Mobile Transaction Card", () => {
  const mockTrx = mockTransactions[0];

  test("renders the rows - amount, type, date-time, and status", () => {
    customRender(<TransactionCardMobile trx={mockTrx} />);

    expect(
      screen.getByRole("row", { name: /amount row/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: /transaction type row/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: /date-time row/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: /transaction status row/i })
    ).toBeInTheDocument();
  });

  test("renders the right values", () => {
    const formattedAmount = currencyFormatter(mockTrx.amount, "NGN", "symbol");
    const formattedDate = formatDate(mockTrx.date, "short");
    const formattedTime = formatTime(mockTrx.time, "12hCompact");

    customRender(<TransactionCardMobile trx={mockTrx} />);
    expect(
      screen.getByRole("cell", { name: /amount value/i })
    ).toHaveTextContent(formattedAmount);

    expect(
      screen.getByRole("cell", { name: /transaction type value/i })
    ).toHaveTextContent(mockTrx.transaction_type);

    expect(
      screen.getByRole("cell", { name: /date-time value/i })
    ).toHaveTextContent(formattedDate);

    expect(
      screen.getByRole("cell", { name: /date-time value/i })
    ).toHaveTextContent(formattedTime);

    const status = screen.getByRole("cell", {
      name: /transaction status value/i,
    });
    expect(status).toBeInTheDocument();
    expect(within(status).getByText(mockTrx.status));
  });
});

describe("Desktop Transaction Card", () => {
  const mockHandler = () => jest.fn;

  test("renders the 7 cells - checkbox, amount, id, type, date, time, and status, and with the right values", () => {
    const mockTrx = { ...mockTransactions[0], checked: true };
    const formattedAmount = currencyFormatter(mockTrx.amount, "NGN", "symbol");
    const formattedDate = formatDate(mockTrx.date, "short");
    const formattedTime = formatTime(mockTrx.time, "12h");

    customRender(
      <TransactionCardDesktop trx={mockTrx} checkHandler={mockHandler} />
    );

    const checkbox = screen.getByRole("cell", { name: /checkbox value/i });
    expect(checkbox).toBeInTheDocument();

    const amount = screen.getByRole("cell", { name: /amount value/i });
    expect(amount).toBeInTheDocument();
    expect(amount).toHaveTextContent(formattedAmount);

    const id = screen.getByRole("cell", { name: /transaction id value/i });
    expect(id).toBeInTheDocument();
    expect(id).toHaveTextContent(mockTrx.transaction_id);

    const type = screen.getByRole("cell", { name: /transaction type value/i });
    expect(type).toBeInTheDocument();
    expect(type).toHaveTextContent(mockTrx.transaction_type);

    const date = screen.getByRole("cell", { name: /date value/i });
    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent(formattedDate);

    const time = screen.getByRole("cell", { name: /time value/i });
    expect(time).toBeInTheDocument();
    expect(time).toHaveTextContent(formattedTime);

    const status = screen.getByRole("cell", {
      name: /transaction status value/i,
    });
    expect(status).toBeInTheDocument();
    expect(within(status).getByText(mockTrx.status));
  });

  test("checkbox is checked when the transaction checked = true", () => {
    const mockTrx = { ...mockTransactions[0], checked: true };

    customRender(
      <TransactionCardDesktop trx={mockTrx} checkHandler={mockHandler} />
    );

    const checkbox = screen.getByRole("cell", { name: /checkbox value/i });
    expect(checkbox).toBeInTheDocument();
    const checkInput = within(checkbox).getAllByRole("checkbox")[0];
    expect(checkInput).toBeChecked();
  });

  test("checkbox is checked when the transaction checked = false", () => {
    const mockTrx = { ...mockTransactions[0], checked: false };

    customRender(
      <TransactionCardDesktop trx={mockTrx} checkHandler={mockHandler} />
    );

    const checkbox = screen.getByRole("cell", { name: /checkbox value/i });
    expect(checkbox).toBeInTheDocument();
    const checkInput = within(checkbox).getAllByRole("checkbox")[0];
    expect(checkInput).not.toBeChecked();
  });
});
