import React from "react";
import { render } from "@testing-library/react";

import { ReportsPage } from "./ReportsPage";

describe("ReportsPage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ReportsPage />);
    expect(baseElement).toBeTruthy();
  });
});
