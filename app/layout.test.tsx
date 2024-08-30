import { render, screen, waitFor } from "@testing-library/react";

import { Layout, metadata } from "./layout";
import Home from "./page";

describe("Root Layout", () => {
  it("renders without error", async () => {
    render(
      <Layout>
        <Home />
      </Layout>,
    );

    await waitFor(() => {
      expect(screen.getByText("Theme")).toBeInTheDocument();
    });

    expect(screen.getByText("Kyle Marple - Personal Site")).toBeInTheDocument();
  });

  it("has expected metadata", () => {
    expect(metadata).toMatchSnapshot();
  });
});
