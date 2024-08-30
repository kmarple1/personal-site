import { render, screen, waitFor } from "@/test-utils/test-utils";

import Header from "./header";

describe("Header", () => {
  it("renders without error", async () => {
    render(<Header />);

    await waitFor(() => {
      expect(screen.getByText("Theme")).toBeInTheDocument();
    });

    expect(screen.getByText("Kyle Marple - Personal Site")).toBeInTheDocument();
  });
});
