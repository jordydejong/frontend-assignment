import { useEffect, useRef, useState } from "react";
<<<<<<< Updated upstream
import ClearIcon from "../Icons/ClearIcon";
import SearchIcon from "../Icons/SeachIcon";
import SearchResults from "./SearchResults";
=======
import { SearchResult } from "../../interfaces/search";
import ClearIcon from "../Icons/ClearIcon";
import SearchIcon from "../Icons/SeachIcon";
import SearchResults from "./SearchResults";

export const DEBOUNCE = 300;
>>>>>>> Stashed changes

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
<<<<<<< Updated upstream
  const [debouncedValue, setDebouncedValue] = useState("")
=======
  const [debouncedValue, setDebouncedValue] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
>>>>>>> Stashed changes

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedValue(value);
<<<<<<< Updated upstream
    }, 300);
=======
    }, DEBOUNCE);
>>>>>>> Stashed changes
    return () => clearTimeout(delayInputTimeoutId);
  }, [value]);

  useEffect(() => {
<<<<<<< Updated upstream
    console.log('go search for ', debouncedValue);
=======
    if (debouncedValue.length > 2) {
      fetch(`/api/search?search=${debouncedValue}`)
        .then((res) => res.json())
        .then((res: SearchResult[]) => {
          console.log(">>>>> res", res);
          setResults(res);
        });
    } else {
      setResults([]);
    }
>>>>>>> Stashed changes
  }, [debouncedValue]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const onClear = () => setValue("");

  return (
    <form>
      <div className="relative h-8" role="seach">
        <input
          id="search"
          ref={inputRef}
          value={value}
          aria-label="search-input"
          onChange={onChange}
          autoFocus
          type="text"
          placeholder="Zoeken"
          className="transition ease-in-out duration-1000 text-sm top-0 appearance-none border border-slate-400 focus:border-black h-full w-full pt-2 pb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div
          className="absolute h-6 top-1 right-[30px]"
          onClick={onClear}
          aria-label="clear-icon"
        >
          <ClearIcon className="fill-slate-400 hover:fill-slate-600 hover:cursor-pointer" />
        </div>
        <label
          className="h-8 right-0 top-0 absolute"
          htmlFor="search"
          aria-labelledby="searchTitle"
        >
          <title id="searchTitle">Zoeken</title>
          <SearchIcon className="fill-slate-400" />
        </label>
        {!!results.length && (
          <SearchResults term={debouncedValue} results={results} />
        )}
      </div>
    </form>
  );
}
