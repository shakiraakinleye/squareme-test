import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import SideNavigation from "@/components/molecules/nav/side-navigation";
import { sideNavigation } from "@/data/navigation";

describe("Side Navigation", () => {
  test("renders all navigation list", () => {
    customRender(<SideNavigation />);
    expect(
      screen.getByRole("list", { name: /side navigation list/i })
    ).toBeInTheDocument();
  });

  test("render 6 navigation items", () => {
    customRender(<SideNavigation />);
    const listItems = screen.getAllByRole("listitem", {
      name: /side navigation list item/i,
    });
    expect(listItems.length).toEqual(sideNavigation.length);
  });

//   test("highlights active link correctly", () => {
//     todo
//   })
});
