"use client";
import { Button } from "@/components/ui/button";
import cx from "classnames";

const ErrorPage = () => {
  return (
    <div
      className={cx(
        "w-full h-screen flex flex-col items-center justify-center text-center px-4",
        "bg-gray-50 text-gray-800"
      )}
    >
      <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
      <p className="mb-4">Please reload the page and try again.</p>
      <Button
        onClick={() => window.location.reload()}
        className="px-5 py-2 rounded-lg text-xs md:text-sm font-inter transition-colors bg-gray-800 text-neutral-200 items-center justify-center"
      >
        Reload Page
      </Button>
    </div>
  );
};

export default ErrorPage;
