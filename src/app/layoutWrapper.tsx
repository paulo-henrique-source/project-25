"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { SideBar } from "@application/components/sidebar";
import { PersonType } from "@application/enums";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const shouldHideSidebar =
    pathname === "/sales" &&
    !(type === PersonType.PF || type === PersonType.PJ);

  return (
    <>
      {!shouldHideSidebar && <SideBar />}
      {children}
    </>
  );
}
