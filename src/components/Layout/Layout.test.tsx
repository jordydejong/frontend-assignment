import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders children", () => {
    const textToFind = "Foo";

    render(<Layout>{textToFind}</Layout>);
    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });
});
