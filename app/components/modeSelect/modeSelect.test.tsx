import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "next-themes";

import { render, screen, waitFor } from "@/test-utils/test-utils";

import ModeSelect from "./modeSelect";

describe("ModeSelect", () => {
  it("renders without error", () => {
    render(<ModeSelect />);
    expect(screen.getByText("Theme")).toBeInTheDocument();
  });

  it("allows selecting light theme", async () => {
    expect(localStorage.getItem("theme")).toBeNull();

    const user = userEvent.setup();
    render(<ModeSelect />, { wrapper: ThemeProvider });
    await user.tab();
    await waitFor(() => expect(screen.getByLabelText("Theme")).toHaveFocus());

    await user.click(screen.getAllByText("Light")[1]);

    await waitFor(() => {
      expect(localStorage.getItem("theme")).toEqual("light");
    });
  });

  it("allows selecting dark theme", async () => {
    expect(localStorage.getItem("theme")).toEqual("light");

    const user = userEvent.setup();
    render(<ModeSelect />, { wrapper: ThemeProvider });
    await user.tab();
    await waitFor(() => expect(screen.getByLabelText("Theme")).toHaveFocus());

    await user.click(screen.getAllByText("Dark")[1]);

    await waitFor(() => {
      expect(localStorage.getItem("theme")).toEqual("dark");
    });
  });
});
