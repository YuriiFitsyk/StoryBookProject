import React from "react";
import { render } from "@testing-library/react";

import { SingleReport } from "./SingleReport";

describe("SingleReport", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SingleReport id={1} />);
    expect(baseElement).toBeTruthy();
  });
});
