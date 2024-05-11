"use client";

import { TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function Entry({ href, children }: { href: string; children: ReactNode }) {
  const active = usePathname() === href;
  return (
    <TabNav.Link asChild active={active}>
      <Link href={href}>{children}</Link>
    </TabNav.Link>
  );
}

export function Nav() {
  return (
    <TabNav.Root justify="end">
      <Entry href="/">about</Entry>
      <Entry href="/blog">blog</Entry>
    </TabNav.Root>
  );
}
