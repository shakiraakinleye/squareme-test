import { format, parseISO } from "date-fns";

type DateFormat = "full" | "short" | "numeric" | "dashNumeric" | "custom";

export function formatDate(
  date: string | Date,
  type: DateFormat = "full",
  customFormat?: string
): string {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;

  switch (type) {
    case "full":
      return format(parsedDate, "MMMM d, yyyy");
    case "short":
      return format(parsedDate, "MMM d, yyyy");
    case "numeric":
      return format(parsedDate, "MM/dd/yyyy");
    case "dashNumeric":
      return format(parsedDate, "yyyy-MM-dd");
    case "custom":
      return format(parsedDate, customFormat || "MMMM d, yyyy");
    default:
      return format(parsedDate, "MMMM d, yyyy");
  }
}

type TimeFormat = "12h" | "12hCompact" | "24h" | "withSeconds" | "custom";

export function formatTime(
  time: string | Date,
  type: TimeFormat = "12h",
  customFormat?: string
): string {
  const parsedTime = typeof time === "string" ? parseISO(time) : time;

  switch (type) {
    case "12h":
      return format(parsedTime, "hh:mm a");
    case "12hCompact":
      return format(parsedTime, "hh:mmaaa").replace(/\s+/g, "");
    case "24h":
      return format(parsedTime, "HH:mm");
    case "withSeconds":
      return format(parsedTime, "HH:mm:ss");
    case "custom":
      return format(parsedTime, customFormat || "hh:mm a");
    default:
      return format(parsedTime, "hh:mm a");
  }
}
