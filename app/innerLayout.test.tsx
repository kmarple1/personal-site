import { render, screen, waitFor } from "@testing-library/react";

import InnerLayout from "./innerLayout";
import Home from "./page";

describe("Root Layout", () => {
  it("renders without error", async () => {
    render(
      <InnerLayout>
        <Home />
      </InnerLayout>,
    );

    await waitFor(() => {
      expect(screen.getByText("Theme")).toBeInTheDocument();
    });

    expect(screen.getByText("Kyle Marple - Personal Site")).toBeInTheDocument();
  });
});
