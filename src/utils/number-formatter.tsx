type KOptions = {
  decimals?: number;
  kCase?: "K" | "k";   
};

export function formatK(num: number, opts: KOptions = {}): string {
  const { decimals = 1, kCase = "K" } = opts;
  if (!Number.isFinite(num)) return String(num);

  const sign = num < 0 ? "-" : "";
  const abs = Math.abs(num);

  if (abs < 1000) return sign + String(abs);

  const val = abs / 1000;
  const str = val.toFixed(decimals).replace(/\.?0+$/, "");
  return `${sign}${str}${kCase}`;
}