import { render, screen } from "@testing-library/react";

import Resume from "./page";

describe("Resume Page", () => {
  it("renders without error", () => {
    render(<Resume />);

    expect(screen.getByText("Kyle Marple")).toBeInTheDocument();
  });
});
