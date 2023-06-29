import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchResult } from "../../interfaces/search";
import Search from "./Search";

const mockResults: SearchResult[] = [
  { searchterm: "foo", nrResults: 123 },
  { searchterm: "bar", nrResults: 12 },
];

const fetchMock = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResults),
  }) as any;
});

describe("Search", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(fetchMock);
  });

  afterEach(() => {
    // TODO restore global.fetch
  });

  it("clears value", () => {
    render(<Search />);

    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "foo" } });

    const icon = screen.getByLabelText("clear-icon");
    fireEvent.click(icon);

    expect(input.value).toBe("");
  });

  it("calls api with search term", async () => {
    render(<Search />);

    const mockSearch = "foo";

    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: mockSearch } });

    await screen.findByTestId("search-results");

    expect(fetchMock.mock.calls[0][0]).toContain(mockSearch);
  });
});
