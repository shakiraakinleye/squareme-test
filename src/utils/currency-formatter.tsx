export const currencyFormatter = (
  price: number,
  currencyType?: string,
  currencyDisplay: "symbol" | "code" | "name" = "code"
) => {
  const type = currencyType ? currencyType : "NGN";
  const display = currencyDisplay ? currencyDisplay : "code";

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: type,
    currencyDisplay: display,
    useGrouping: true,
    minimumFractionDigits: 2,
  }).format(price);

  return formattedPrice;
};
