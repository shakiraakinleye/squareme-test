import Image from "next/image";
import logo from "@/logos/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-20 md:w-24">
      <Link className="w-full h-full" href="/">
        <Image
          src={logo}
          alt="brand logo"
          aria-label="Brand Logo"
          className="w-full h-full"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
