import PageHeaderMobile from "@/components/molecules/page-header";

export default function Settings() {
  return (
    <div className="w-full">
      <PageHeaderMobile href={"/"} />
      <h1 className="text-foreground-300 text-lg md:text-xl font-inter">Settings</h1>
    </div>
  );
}
