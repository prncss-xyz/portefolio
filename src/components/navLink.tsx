"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import * as TabNav from "./base/tabNav";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const active = usePathname() === href;
  return (
    <TabNav.Link value={href} active={active}>
      <Link href={href}>
        {children}
      </Link>
    </TabNav.Link>
  );
}
