import UIProvider from "./ui-provider";
import StateProvider from "./state-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
      <StateProvider>
        <UIProvider>{children}</UIProvider>
      </StateProvider>
  );
};

export default Providers;
