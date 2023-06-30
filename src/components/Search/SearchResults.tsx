import { ReactNode } from "react";
import { SearchResultResponse } from "../../interfaces/search";
import { SearchResult } from './SearchResult';

type Props = {
  results: SearchResultResponse[];
  term: string;
};

const highlight = (str: string, term: string): ReactNode[] => {
  // TODO: this currently only works for FIRST occurence

  const index = str.indexOf(term);

  const beforeNode = (
    <span key={`${str}-before`}>{str.substring(0, index)}</span>
  );
  const termNode = (
    <b key={`${str}-term`}>{str.substring(index, index + term.length)}</b>
  );
  const afterNode = (
    <span key={`${str}-after`}>{str.substring(index + term.length)}</span>
  );

  return [beforeNode, termNode, afterNode];
};


export default function SearchResults({ term, results }: Props) {
  return (
    <div
      className="absolute  bg-white w-full"
      data-testid="search-results"
    >
      {results.map((result) => (
        <SearchResult key={result.searchterm} data-testid="search-result">
          {highlight(result.searchterm, term)} ({result.nrResults})
        </SearchResult>
      ))}

      {results.length == 0 && <SearchResult>geen resultaten</SearchResult>}
    </div>
  );
}
