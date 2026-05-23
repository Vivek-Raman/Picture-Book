import { BookOpenIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function NavItem({
  to,
  end,
  children,
}: {
  to: string;
  end?: boolean;
  children: ReactNode;
}) {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <Button variant={isActive ? "secondary" : "ghost"} size="sm">
          {children}
        </Button>
      )}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="min-h-svh bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-heading text-sm font-medium"
          >
            <BookOpenIcon className="size-5 text-primary" weight="duotone" />
            Picture Book
          </NavLink>
          <Separator orientation="vertical" className="h-6" />
          <nav className="flex items-center gap-1">
            <NavItem to="/" end>
              Home
            </NavItem>
            <NavItem to="/about">About</NavItem>
          </nav>
        </div>
      </header>
      <main className={cn("mx-auto max-w-5xl px-4 py-8")}>
        <Outlet />
      </main>
    </div>
  );
}
