import MobileNavBar from "@/components/organisms/mobile-navs";
import DashboardContent from "@/components/organisms/dashboard";

interface PageProps {
  searchParams: { tab?: string };
}

// if no user is loggeed, this won't render - redirect to log in page

export default function Dashboard({ searchParams }: PageProps) {
  return (
    <div className="relative bg-background-100 md:bg-background-200 mx-auto flex-1 w-full">
      <MobileNavBar />
      <DashboardContent currentTab={searchParams.tab} />
    </div>
  );
}
