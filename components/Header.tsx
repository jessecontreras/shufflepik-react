"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="brand">Shufflepik</div>

      {/* Inline nav for large screens */}
      <nav className="nav-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link href="/albums" className={pathname === "/albums" ? "active" : ""}>
          Albums
        </Link>
        <Link
          href="/settings"
          className={pathname === "/settings" ? "active" : ""}
        >
          Settings
        </Link>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>

      {/* Burger menu + dropdown for small screens */}
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span className="bar top" />
            <span className="bar middle" />
            <span className="bar bottom" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="dropdown-content"
            align="start"
            sideOffset={0}
            side="bottom"
            asChild
          >
            <div className="dropdown-panel">
              <DropdownMenu.Item asChild>
                <Link href="/">Home</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link href="/albums">Albums</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              {isLoggedIn ? (
                <DropdownMenu.Item onSelect={logout}>Logout</DropdownMenu.Item>
              ) : (
                <DropdownMenu.Item asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenu.Item>
              )}
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  );
}
