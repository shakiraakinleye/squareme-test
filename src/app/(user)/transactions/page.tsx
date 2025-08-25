import TransactionsPage from "@/components/organisms/transactions-page";
import PageHeaderMobile from "@/components/molecules/page-header";

export default function Transactions() {
  return (
    <div className="w-full">
      <PageHeaderMobile title="transactions" href={"/"} />
      <TransactionsPage />
    </div>
  );
}
