import { screen } from "@testing-library/react";
import { customRender } from "@/utils/test-utils";
import { user } from "@/utils/test-utils";
import NavButtons from "@/components/molecules/nav/nav-buttons";

describe("Nav Buttons - icon and user menu buttons", () => {
  test("user menu is hidden", () => {
    customRender(<NavButtons />);
    expect(
      screen.queryByRole("menu", { name: /user menu/i })
    ).not.toBeInTheDocument();
  });

  test("user menu opens when user menu button is clicked", async () => {
    customRender(<NavButtons />);

    const userMneuBtn = screen.getByRole("button", { name: /open user menu/i });
    user.click(userMneuBtn);

    expect(
      await screen.findByRole("menu", { name: /user menu/i })
    ).toBeInTheDocument();
  });
});
