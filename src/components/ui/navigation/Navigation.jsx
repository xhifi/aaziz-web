"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import clsx from "clsx";

import NavDropdown from "@/components/ui/navigation/NavDropdown";
import metaData from "@/data/metaData";
import Brand from "@/static/images/brand/logo";
import Link from "@/components/core/Link";
import PreNav from "./PreNav";

const Navigation = () => {
  const pathName = usePathname();
  const navbarRef = useRef(null);
  // useCheckIfScrolled(navbarRef);

  return (
    <>
      <PreNav data={metaData} />
      <div className="bg-white bg-clip-padding px-4 md:px-12 w-full sticky top-[-1px] shadow-lg z-10 transition-all select-none">
        <div className="flex flex-col md:flex-row flex-wrap items-center">
          <div className="flex flex-row w-full md:w-auto">
            <Link href="/">
              <Brand className="w-48 py-1" />
            </Link>
            <button
              className="ms-auto md:hidden"
              onClick={() => {
                document.getElementById("primary-nav").classList.toggle("hidden");
              }}
            >
              Menu
            </button>
          </div>
          <nav className="md:ms-auto text-slate text-base w-full md:w-auto py-2 hidden md:block" id="primary-nav">
            <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 w-full">
              {metaData.navigation.map((nav, idx) => {
                return (
                  <li key={idx} className="block md:inline-block me-1 last:me-0">
                    {nav.menu ? (
                      <div className={`block md:block md:w-full px-2 py-1 rounded-md hover:bg-slate-200`}>
                        <NavDropdown title={nav.text} data={nav.menu} className="inline-block w-full md:block md:w-auto" />
                      </div>
                    ) : (
                      <Link
                        href={nav.path}
                        className={clsx(`px-2 py-1 rounded-md w-full block`, {
                          "bg-primary text-white cursor-default": pathName === nav.path,
                          "hover:bg-slate-200": pathName !== nav.path,
                        })}
                      >
                        {nav.text}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
