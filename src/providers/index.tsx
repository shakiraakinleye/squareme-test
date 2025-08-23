import UIProvider from "./ui-provider";
import StateProvider from "./state-provider";
import QueryProvider from "./query-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <StateProvider>
        <UIProvider>{children}</UIProvider>
      </StateProvider>
    </QueryProvider>
  );
};

export default Providers;
