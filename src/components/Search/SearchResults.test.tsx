import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchResultResponse } from "../../interfaces/search";
import SearchResults from "./SearchResults";

describe("SearchResults", () => {
  const mockResults: SearchResultResponse[] = [
    { searchterm: "foo", nrResults: 123 },
    { searchterm: "bar", nrResults: 12 },
  ];

  it("renders values", () => {
    render(
      <SearchResults activeIndex={null} results={mockResults} term="foo" />
    );

    const results = screen.getAllByTestId("search-result");
    expect(results.length).toBe(mockResults.length);
  });
});
