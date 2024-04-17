import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export default function cn({ ...rest }) {
  return twMerge(clsx(rest));
}
