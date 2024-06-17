import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

test("renders Contact component", () => {
  const { getByText } = render(<Contact />);
  const linkElement = getByText(/Contact Information/i);
  expect(linkElement).toBeInTheDocument();
});
