"use client";

import * as React from "react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const options = [
  { label: "Light", Icon: SunIcon },
  { label: "Dark", Icon: MoonIcon },
  { label: "System", Icon: ComputerDesktopIcon },
];

const ModeSelect = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const selectedIndex = resolvedTheme === "dark" ? 1 : 0;

  const handleSelect = (label: string) => {
    setTheme(label.toLowerCase());
  };

  return (
    <div className="dropdown dropdown-end">
      <label className="sr-only" id="select-label" htmlFor="select-button">
        Theme
      </label>
      <div aria-labelledby="select-label" className="btn btn-ghost" id="select-button" role="button" tabIndex={0}>
        <SunIcon className="size-6 dark:hidden" />
        <MoonIcon className="hidden size-6 dark:block" />
      </div>
      <ul
        className="menu dropdown-content menu-sm z-[1] mt-3 w-32 rounded-box bg-base-200 p-2 shadow"
        role="menu"
        tabIndex={0}
      >
        {options.map((option, i) => (
          <li key={option.label} aria-selected={i === selectedIndex} role="option">
            <button className={`${i === selectedIndex ? "active" : ""}`} onClick={() => handleSelect(option.label)}>
              <option.Icon className="size-6" />
              <span className="pl-2">{option.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModeSelect;
