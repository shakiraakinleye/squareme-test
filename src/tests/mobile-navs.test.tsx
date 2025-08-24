import { screen, within, waitFor } from "@testing-library/react";
import { mockMatchMedia, customRender } from "@/utils/test-utils";
import MobileNavBar from "@/components/organisms/mobile-navs";
import { user } from "@/utils/test-utils"


describe("Mobile Navigation Bar", () => {
  test("renders only on mobile (hidden on tablet/desktop)", () => {
    mockMatchMedia(768);
    customRender(<MobileNavBar />);
    expect(
      screen.getByRole("navigation", {
        name: /mobile navigation bar/i,
      })
    ).toHaveClass("md:hidden");
  });

  test("renders with nav icon, logo, and nav buttons", () => {
    customRender(<MobileNavBar />);
    expect(
      screen.getByRole("button", { name: /open mobile side navigation/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /brand logo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("list", { name: /navigation buttons/i })
    ).toBeInTheDocument();
  });

  test("side navigation opens/closes when open/close buttons are clicked", async () => {
    customRender(<MobileNavBar />);

    const sideNavTrigger = screen.getByRole("button", {
      name: /open mobile side navigation/i,
    });
    user.click(sideNavTrigger);

    const sideNavDrawer = await screen.findByRole("dialog");
    expect(sideNavDrawer).toBeInTheDocument();

    const mobileSideNav = within(sideNavDrawer).getByRole("navigation", {
      name: /side navigation/i,
    });
    expect(mobileSideNav).toBeInTheDocument();

    const closeButton = within(sideNavDrawer).getByRole("button", {
      name: /close mobile side navigation/i,
    });
    user.click(closeButton);

    await waitFor(() => {
      expect(sideNavDrawer).not.toBeInTheDocument();
      expect(mobileSideNav).not.toBeInTheDocument();
    });
  });
});
