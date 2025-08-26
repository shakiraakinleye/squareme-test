import cx from "classnames";
import { CircleAlert } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  mutedBg?: boolean;
}

const ErrorState = ({
  message = "Something went wrong",
  mutedBg = false,
}: ErrorStateProps) => {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center w-full h-full text-center p-6",
        mutedBg && "bg-gray-100"
      )}
    >
      <div className="text-red-500 text-xm md:text-xl font-semibold mb-2 flex items-center gap-x-2">
        <CircleAlert className="stroke-red-500 w-6 h-6 md:w-8 md:h-8" />
        {message}
      </div>
    </div>
  );
};

export default ErrorState;
