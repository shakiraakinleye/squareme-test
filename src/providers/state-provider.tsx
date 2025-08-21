"use client";

import { RootState } from "../state/store";
import { Provider } from "react-redux";

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={RootState}>{children}</Provider>;
};

export default StateProvider;
