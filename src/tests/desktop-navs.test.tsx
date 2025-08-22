import { screen } from "@testing-library/react";
import { mockMatchMedia, customRender } from "@/utils/test-utils";
import {
  DesktopNavBar,
  DesktopSideNav,
} from "@/components/organisms/desktop-navs";

describe("Desktop Navigation", () => {
  test("Navigation Bar only renders on tablet and desktop screens", () => {
    mockMatchMedia(500);
    customRender(<DesktopNavBar />);
    const navBar = screen.getByRole("navigation", {
      name: /desktop navigation bar/i,
    });
    expect(navBar).toHaveClass("hidden md:block");
  });

  test("Navigation only renders on tablet and desktop screens", () => {
    mockMatchMedia(500);
    customRender(<DesktopSideNav />);
    const sideNav = screen.getByRole("navigation", {
      name: /desktop side navigation/i,
    });
    expect(sideNav).toHaveClass("hidden md:block");
  });

  test("Navigation Bar renders on logo and nav buttons", () => {
    customRender(<DesktopNavBar />);
    expect(
      screen.getByRole("img", { name: /brand logo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("list", { name: /navigation buttons/i })
    ).toBeInTheDocument();
  });
});
