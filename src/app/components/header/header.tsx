"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/20/solid";
import ModeSelect from "../modeSelect/modeSelect";
import GithubIcon from "./github-mark.svg";

const navItems = [
  {
    label: "My Resume",
    path: "/resume",
  },
];

const Header = () => {
  const renderNavItems = () =>
    navItems.map((navItem) => (
      <li key={navItem.label}>
        <Link href={navItem.path}>{navItem.label}</Link>
      </li>
    ));

  return (
    <div className="navbar border-b bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <GithubIcon alt="github" className="size-6" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
