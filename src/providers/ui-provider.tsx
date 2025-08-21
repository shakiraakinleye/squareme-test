import { Provider } from "@/components/ui/provider";

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}