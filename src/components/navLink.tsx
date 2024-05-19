"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Link as TabLink } from "./base/tabNav";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const active = usePathname() === href;
  return (
    <TabLink value={href} active={active}>
      <Link href={href}>{children}</Link>
    </TabLink>
  );
}
