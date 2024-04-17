"use client";

import { useRef, useState } from "react";
import useDetectOutsideClick from "@/utils/hooks/useDetectOutsideClick";
import Link from "../../core/Link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavDropdown = ({ data, title, className, children }) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef();
  const pathName = usePathname();
  useDetectOutsideClick(menuRef, setShow);

  return (
    <>
      <span
        className={`md:relative cursor-pointer md:block md:w-full inline-block ${className}`}
        ref={menuRef}
        onClick={() => {
          setShow(!show);
        }}
      >
        <button>
          {title} <i className="bi bi-chevron-down"></i>
        </button>
        <ul
          className={`md:absolute z-[1] bg-white border border-slate-300 md:whitespace-nowrap mt-2 rounded-lg overflow-hidden py-2 left-0 transition-all mb-1 md:mb-0 min-w-44 ${
            show ? "visible" : "scale-125 hidden translate-y-16"
          }`}
        >
          {data.map((link, idx) => {
            return (
              <li className="hover:bg-slate-200" key={idx}>
                <Link
                  href={link.path}
                  className={`inline-block w-full py-1 px-3 ${
                    pathName === link.path ? "bg-primary text-white hover:bg-primary cursor-default" : ""
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </span>
    </>
  );
};

export default NavDropdown;
