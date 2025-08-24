import { Link, Tabs } from "@chakra-ui/react";
import { Tab } from "@/types/dashboard";
import OnlinePaymentsDisplay from "../molecules/dashboard/online-payments";

export const DashboardTabs = ({
  currentTab,
  tabs,
}: {
  currentTab: string | undefined;
  tabs: Tab[];
}) => {
  return (
    <Tabs.Root
      defaultValue={currentTab ?? tabs[0].query}
      variant="line"
      lazyMount
      unmountOnExit
      className="flex flex-col gap-y-4 md:gap-y-12"
    >
      <Tabs.List
        className="px-6 md:px-8 border-b-2 border-border-200 flex items-center gap-x-2"
        unstyled
        role="tablist"
        aria-label="dashboard tabs list"
      >
        {tabs.map((tab) => {
          return (
            <Tabs.Trigger
              key={tab.id}
              value={tab.query}
              className="py-2 md:py-4 md:px-2 flex items-center font-inter bg-transparent border-b-[3px] border-transparent"
              disabled={tab.disabled ?? false}
              aria-label="dashboard tab"
              _selected={{
                bg: "transparent",
                borderBottomWidth: "3px",
                borderBottomStyle: "solid",
                borderBottomColor: "blue.600",
                transition: "colors",
                transitionDuration: "250ms",
              }}
            >
              <Link
                unstyled
                href={`?tab=${tab.query}`}
                className="w-full h-full flex items-center gap-x-1.5 md:gap-x-2"
              >
                {tab.icon && (
                  <tab.icon className="w-4 h-4 md:w-5 md:h-5 stroke-foreground-200" />
                )}
                <span className="text-xs font-medium leading-normal tracking-normal text-foreground-200 md:text-base md:font-semibold capitalize">
                  {tab.title}
                </span>
              </Link>
            </Tabs.Trigger>
          );
        })}
        <Tabs.Indicator />
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content
          key={tab.id}
          value={tab.query}
          className="px-6 md:px-8"
          aria-label="dashboard tab content"
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export const tabs: Tab[] = [
  {
    id: "938930",
    title: "online payments",
    query: "online-payments",
    content: <OnlinePaymentsDisplay />,
  },
];

const DashboardContent = ({
  currentTab,
}: {
  currentTab: string | undefined;
}) => {
  return (
    <div className="py-4 md:py-10 md:pl-6">
      <DashboardTabs tabs={tabs} currentTab={currentTab} />
    </div>
  );
};

export default DashboardContent;
