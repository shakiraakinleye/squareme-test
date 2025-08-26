import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import RevenueCard from "@/components/molecules/dashboard/revenue-card";
import { mockUser } from "../mocks/data";

describe("Revenue Card", () => {
  test("renders the filter header", () => {
    customRender(<RevenueCard userId={mockUser.id} />);
    expect(
      screen.getByRole("header", { name: "revenue filter header" })
    ).toBeInTheDocument();
  });

  test("renders the filter select", () => {
    customRender(<RevenueCard userId={mockUser.id} />);
    expect(
      screen.getByRole("select", { name: "filter select box" })
    ).toBeInTheDocument();
  });

  test("renders the filter buttons only on desktop (hidden on mobile)", () => {
    customRender(<RevenueCard userId={mockUser.id} />);
    expect(
      screen.getByRole("list", { name: "filter buttons list" })
    ).toBeInTheDocument();
  });

  test("renders the revenue chart skeleton", () => {
    customRender(<RevenueCard userId={mockUser.id} />);
    const chartSkeleton = screen.getByRole("article", { name: /revenue chart loading/i });
    expect(chartSkeleton).toBeInTheDocument();
  });
});
