"use client";

import Link from "next/link";
import GithubIcon from "./github-mark.svg";
import LinkedInIcon from "./linked-in.svg";

import ModeSelect from "../modeSelect/modeSelect";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b p-4">
      <div className="flex justify-between">
        <span>Kyle Marple - Personal Site and Portfolio</span>
        <Link className="pl-4" href="https://www.linkedin.com/in/kylemarple/" target="_blank">
          <LinkedInIcon alt="LinkedIn" className="size-6 fill-base-content" />
        </Link>
        <Link className="pl-4" href="https://github.com/kmarple1" target="_blank">
          <GithubIcon alt="github" className="size-6 fill-base-content" />
        </Link>
      </div>
      <div className="flex justify-between">
        <ModeSelect />
      </div>
    </header>
  );
};

export default Header;
