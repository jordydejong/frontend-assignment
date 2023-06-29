import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search", () => {
  it("clears value", () => {
    render(<Search />);

    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "foo" } });

    const icon = screen.getByLabelText("clear-icon");
    fireEvent.click(icon);

    expect(input.value).toBe("");
  });
});
