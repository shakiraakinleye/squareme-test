import MobileNavBar from "@/components/organisms/mobile-navs";

export default function Dashboard() {
  return (
    <div className="bg-background-200 max--w-screen-2xl mx-auto w-full h-full">
      <MobileNavBar />
      <span className="text-red-700">Dashboard</span>
    </div>
  );
}
