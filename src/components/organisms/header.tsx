import SideNavButton from "../molecules/nav/side-nav-button";
import Logo from "../atoms/logo";
import NavButtons from "../molecules/nav/nav-buttons";

const Header = () => {
  return (
    <nav className="bg-background-100 max--w-screen-2xl mx-auto w-full">
      <div className="w-full flex items-center justify-between py-4 px-6 lg:px-8 border-b border-border-100">
        <div className="md:hidden">
          <SideNavButton />
        </div>
        <Logo />
        <NavButtons />
      </div>
    </nav>
  );
};

export default Header;
