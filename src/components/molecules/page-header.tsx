import { MoveLeft } from "lucide-react";
import { LinkButton } from "../ui/link-button";

interface Props {
  title: string;
  href: string;
}

const PageHeaderMobile = ({ title, href }: Props) => {
  return (
    <div
      className="sticky top-0 inset-x-0 z-20 w-full md:hidden flex items-center gap-x-4 px-6 py-4 border-b border-border-100 bg-background-100"
      aria-label="mobile page header"
    >
      <LinkButton href={href} className="min-w-fit p-0">
        <MoveLeft className="w-6 h-6 stroke-foreground-300" />
      </LinkButton>
      <span className="text-foreground-300 font-inter font-semibold leading-normal text-base capitalize">
        {title}
      </span>
    </div>
  );
};

export default PageHeaderMobile;

