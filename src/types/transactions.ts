export type TransactionStatus = "processed" | "failed" | "pending";

export interface Transaction {
  userId: string;
  currency: string;
  transaction_id: string;
  transaction_type: string;
  amount: number;
  date: string;
  time: string;
  status: TransactionStatus | string;
}
