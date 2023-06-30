import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchResultResponse } from "../../interfaces/search";
import Search from "./Search";

const mockResults: SearchResultResponse[] = [
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

  it("sets active index on arrow down", async () => {
    render(<Search />);

    const mockSearch = "foo";

    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: mockSearch } });

    await screen.findAllByTestId("search-result");

    let activeResult = screen.queryByTestId("search-result-active");
    expect(activeResult).toEqual(null);

    fireEvent.keyDown(input, { key: "ArrowDown" });

    activeResult = await screen.findByTestId("search-result-active");
    expect(activeResult?.textContent).toContain(mockResults[0].searchterm);

    fireEvent.keyDown(input, { key: "ArrowDown" });

    activeResult = await screen.findByTestId("search-result-active");
    expect(activeResult?.textContent).toContain(mockResults[1].searchterm);
  });

  it("sets active index on arrow up", async () => {
    render(<Search />);

    const mockSearch = "foo";

    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: mockSearch } });

    await screen.findAllByTestId("search-result");

    let activeResult = screen.queryByTestId("search-result-active");
    expect(activeResult).toEqual(null);

    fireEvent.keyDown(input, { key: "ArrowUp" });

    activeResult = await screen.findByTestId("search-result-active");
    expect(activeResult?.textContent).toContain(mockResults[1].searchterm);

    fireEvent.keyDown(input, { key: "ArrowUp" });

    activeResult = await screen.findByTestId("search-result-active");
    expect(activeResult?.textContent).toContain(mockResults[0].searchterm);
  });

  it("selects active option on enter", async () => {
    const onSelectSpy = jest.fn();
    render(<Search onSelect={onSelectSpy} />);

    const mockSearch = "foo";

    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: mockSearch } });

    await screen.findAllByTestId("search-result");

    let activeResult = screen.queryByTestId("search-result-active");
    expect(activeResult).toEqual(null);

    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onSelectSpy).toHaveBeenCalled();
  });

  it("returns search term on form submit ", async () => {
    const onSelectSpy = jest.fn();
    render(<Search onSelect={onSelectSpy} />);

    const mockSearch = "fooz";

    const input = screen.getByLabelText("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: mockSearch } });

    const form = screen.getByLabelText("search-form") as HTMLInputElement;
    fireEvent.submit(form);

    expect(onSelectSpy).toHaveBeenCalledWith(mockSearch);
  });
});
