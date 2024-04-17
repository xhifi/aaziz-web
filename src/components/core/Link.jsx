"use client";

import { useCallback } from "react";
import NextLink from "next/link";

const Link = ({ children, href, ...rest }) => {
  const isExternal = (link) => {
    try {
      new URL(link);
      return true;
    } catch (error) {
      return false;
    }
  };

  if (isExternal(href)) {
    return (
      <a href={href} rel="noreferrer" target="_blank" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
};
export default Link;
