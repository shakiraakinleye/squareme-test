import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import RevenueCard from "@/components/molecules/dashboard/revenue-card";
import { mockMatchMedia } from "@/utils/test-utils";
import { mockUser } from "./mock-data";

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

  test("renders the chart header only on desktop (hidden on mobile)", () => {
    mockMatchMedia(768);
    customRender(<RevenueCard userId={mockUser.id} />);
    expect(
      screen.getByRole("header", { name: "revenue chart header" })
    ).toHaveClass("hidden md:flex");
  });

  test("renders the revenue chart", () => {
    customRender(<RevenueCard userId={mockUser.id} />);
    const chart = screen.getByRole("chart");
    expect(chart).toBeInTheDocument();
  });

});
