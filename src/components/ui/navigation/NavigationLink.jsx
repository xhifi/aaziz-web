"use client";

import Link from "@/components/core/Link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ children, href, ...rest }) => {
  const pathName = usePathname();
  console.log(pathName, href);
  return (
    <Link className={`${pathName === href ? "bg-slate-900" : ""}`} href={href} {...rest}>
      {children}
    </Link>
  );
};
export default NavigationLink;
