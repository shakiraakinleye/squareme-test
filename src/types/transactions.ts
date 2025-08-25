export type TransactionStatus = "processed" | "failed" | "pending";

export interface Transaction {
  currency: string;
  transaction_id: string;
  transaction_type: string;
  amount: number;
  date: string;
  time: string;
  status: TransactionStatus | string;
}

export interface TransactionsData {
  page: number;
  per_page: number;
  total: number;
  next_page: number | null;
  transactions: Transaction[];
}
