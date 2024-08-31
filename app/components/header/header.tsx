"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/20/solid";

import Github from "../../../public/images/github-mark.svg";

const ModeSelect = dynamic(() => import("../modeSelect/modeSelect"), { ssr: false });

const navItems = [
  {
    label: "My Resume",
    path: "/resume",
  },
];

/**
 * This component will show centered links when viewed on a larger screen. However,
 * when viewed on a small screen, the centered links will be replaced by a hamburger menu.
 */
const Header = () => {
  const renderNavItems = () =>
    navItems.map((navItem) => (
      <li key={navItem.label}>
        <Link href={navItem.path}>{navItem.label}</Link>
      </li>
    ));

  return (
    <div className="navbar sticky top-0 z-50 border-b bg-base-100/50 backdrop-blur">
      <div className="navbar-start">
        <div className="dropdown">
          <div aria-label="Menu" className="btn btn-ghost lg:hidden" role="button" tabIndex={0}>
            <Bars3Icon className="size-6" />
          </div>
          <ul
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
            role="menu"
            tabIndex={0}
          >
            {renderNavItems()}
          </ul>
        </div>
        <Link className="text-md btn btn-ghost lg:text-xl" href="/">
          Kyle Marple - Personal Site
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderNavItems()}</ul>
      </div>
      <div className="navbar-end">
        <ModeSelect />
        <Link
          aria-label="github"
          className="btn btn-ghost"
          href="https://github.com/kmarple1/personal-site"
          target="_blank"
        >
          <Github className="size-6 bg-transparent" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
