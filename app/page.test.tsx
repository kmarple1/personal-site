import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home Page", () => {
  it("renders without error", () => {
    render(<Home />);

    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });
});
