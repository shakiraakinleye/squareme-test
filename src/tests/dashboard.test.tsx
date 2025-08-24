import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import DashboardContent, {
  tabs,
  DashboardTabs,
} from "@/components/organisms/dashboard";
import { user } from "@/utils/test-utils";
import { mockTabs } from "./mock-data";

describe("Dashboard Tabs", () => {
  test("renders tab list and tabs", async () => {
    customRender(<DashboardContent currentTab="" />);
    const tabList = await screen.findByRole("tablist", {
      name: /dashboard tabs list/i,
    });
    expect(tabList).toBeInTheDocument();
    const tabss = await screen.findAllByRole("tab", { name: /dashboard tab/i });
    expect(tabss.length).toEqual(tabs.length);
  });

  test("tab content changes when tabs are clicked", async () => {
    customRender(<DashboardTabs tabs={mockTabs} currentTab="" />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.length).toEqual(mockTabs.length);

    await user.click(tabs[2]);
    expect(
      await screen.findByRole("tabpanel", { name: /accounts tab panel/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("tabpanel", { name: /orders tab panel/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("tabpanel", { name: /payments tab panel/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("tabpanel", { name: /products tab panel/i })
    ).not.toBeInTheDocument();
  });
});
