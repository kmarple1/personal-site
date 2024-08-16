/*
 * This component is based on the "Select" example provided by Floating UI (https://floating-ui.com/)
 * available at https://codesandbox.io/p/sandbox/falling-dew-zp6pkm. It was modified by me to
 */

"use client";

import * as React from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  useTypeahead,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
} from "@floating-ui/react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const options = [
  { label: "Light", Icon: SunIcon },
  { label: "Dark", Icon: MoonIcon },
  { label: "System", Icon: ComputerDesktopIcon },
];

export default function App() {
  const { resolvedTheme, setTheme } = useTheme();
  const optionsStrings = options.map((option) => option.label);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const selectedIndex = resolvedTheme === "dark" ? 1 : 0;

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  const listContentRef = React.useRef(optionsStrings);
  const isTypingRef = React.useRef(false);

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : undefined,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping;
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    dismiss,
    role,
    listNav,
    typeahead,
    click,
  ]);

  const handleSelect = (index: number, label: string) => {
    setIsOpen(false);
    setTheme(label.toLowerCase());
  };

  return (
    <>
      <label className="sr-only" id="select-label" htmlFor="select-button">
        Theme
      </label>
      <button
        aria-labelledby="select-label"
        className="m-auto size-6"
        id="select-button"
        ref={refs.setReference}
        tabIndex={0}
        {...getReferenceProps()}
      >
        <SunIcon className="dark:hidden" />
        <MoonIcon className="hidden dark:block" />
      </button>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <ul
              className="w-34 menu overflow-y-auto rounded-box bg-base-200 p-0"
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
              }}
              {...getFloatingProps()}
            >
              {options.map((option, i) => (
                <li
                  key={option.label}
                  aria-selected={i === selectedIndex && i === activeIndex}
                  className={`cursor-pointer border-none p-2 outline-none focus-visible:focus`}
                  ref={(node) => {
                    listRef.current[i] = node;
                  }}
                  role="option"
                  tabIndex={i === activeIndex ? 0 : -1}
                  {...getItemProps({
                    // Handle pointer select.
                    onClick() {
                      handleSelect(i, options[i].label);
                    },
                    // Handle keyboard select.
                    onKeyDown(event) {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        handleSelect(i, options[i].label);
                      }

                      if (event.key === " " && !isTypingRef.current) {
                        event.preventDefault();
                        handleSelect(i, options[i].label);
                      }
                    },
                  })}
                >
                  <div className={`flex flex-row ${i === selectedIndex ? "active" : ""}`}>
                    <option.Icon className="size-6" />
                    <span className="pl-2">{option.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
}
