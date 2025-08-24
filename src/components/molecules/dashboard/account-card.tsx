import { User } from "@/types/user";
import { ClipboardRoot, ClipboardButton } from "@/components/ui/clipboard";

const AccountCard = ({ user }: { user: User }) => {
  const {
    accountDetails: { bank, accountName, accountNumber },
  } = user;

  return (
    <div
      role="article"
      aria-label="account card"
      className="flex flex-col gap-y-1 md:gap-y-2 font-inter p-4 md:py-5 md:px-6 pr-6 md:pr-8 w-full md:max-w-96 uppercase border-2 border-border-200 rounded-md bg-background-100"
    >
      <h4 className="font-medium text-xxs md:text-xs leading-6 text-muted-200" role="label" aria-label="account details title">
        account details
      </h4>

      <div className="text-foreground-300 font-medium text-xxs md:text-xs leading-6">
        <p className="text-inherit" role="label" aria-label="account bank name">{bank}</p>

        <div className="flex justify-between items-center gap-x-2 md:gap-x-4">
          <p className="text-lg md:text-xl leading-snug font-semibold" role="label" aria-label="account number">{accountNumber}</p>

          <ClipboardRoot
            value={accountNumber}
            className="bg-purple-600 bg-opacity-20 text-magenta-100 stroke-magenta-100 rounded-md"
          >
            <ClipboardButton
              variant="ghost"
              className="py-0.5 md:py-1 h-fit px-2 gap-2 flex items-center"
              aria-label="copy button"
            />
          </ClipboardRoot>
        </div>
      </div>

      <p className="text-foreground-300 font-medium text-xxs md:text-xs leading-6" role="label" aria-label="account name">
        {accountName}
      </p>
    </div>
  );
};

export default AccountCard;