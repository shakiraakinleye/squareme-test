import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import UserMenu from "@/components/molecules/nav/user-menu";
import { mockUser } from "@/mocks/data";
import { userMenuItems } from "@/data/navigation";

describe("Nav Buttons - icon and user menu buttons", () => {
  test("renders the right user's name", () => {
    customRender(<UserMenu user={mockUser} />);
    const nameLabel = screen.getByRole("label", { name: /user name/i });
    expect(nameLabel).toBeInTheDocument();
    expect(nameLabel).toHaveTextContent(mockUser.name);
  });

  test("renders the right user's email", () => {
    customRender(<UserMenu user={mockUser} />);
    const emailLabel = screen.getByRole("label", { name: /user email/i });
    expect(emailLabel).toBeInTheDocument();
    expect(emailLabel).toHaveTextContent(mockUser.email);
  });

  test("renders all the menu items", () => {
    customRender(<UserMenu user={mockUser} />);
    const menuItems = screen.getAllByRole("button", {
      name: /user menu item/i,
    });
    expect(menuItems.length).toEqual(userMenuItems.length);
  });

  test("renders a log out button", () => {
    customRender(<UserMenu user={mockUser} />);
    expect(
      screen.getByRole("button", { name: /logout button/i })
    ).toBeInTheDocument();
  });
});
