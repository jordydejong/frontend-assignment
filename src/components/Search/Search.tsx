import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { SearchResultResponse } from "../../interfaces/search";
import ClearIcon from "../Icons/ClearIcon";
import SearchIcon from "../Icons/SeachIcon";
import SearchResults from "./SearchResults";

const DEBOUNCE = 300;
const MIN_LENGTH = 3;

type Props = {
  onSelect?: (term: string) => void;
};

export default function Search({ onSelect }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [debouncedValue, setDebouncedValue] = useState("");
  const [results, setResults] = useState<SearchResultResponse[] | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  useEffect(() => {
    const debounceTimeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, DEBOUNCE);

    return () => clearTimeout(debounceTimeoutId);
  }, [value]);

  useEffect(() => {
    if (debouncedValue.length >= MIN_LENGTH) {
      fetch(`/api/search?search=${debouncedValue}`)
        .then((res) => res.json())
        .then((res: SearchResultResponse[]) => {
          setActiveIndex(null);
          setResults(res);
        });
    } else {
      setActiveIndex(null);

      if (results?.length) {
        setResults([]);
      }
    }
  }, [debouncedValue]);

  const onChange = (e: FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const onClear = () => setValue("");

  function onSubmitForm(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (onSelect) {
      onSelect(value);
    }
  }

  function handleKeyDown(evt: KeyboardEvent<HTMLFormElement>) {
    let newActiveIndex = null;

    if (results?.length) {
      if (evt.key == "ArrowDown") {
        evt.preventDefault();

        if (activeIndex === null) {
          newActiveIndex = 0;
        } else {
          newActiveIndex = Math.min(activeIndex + 1, results.length - 1);
        }
      } else if (evt.key == "ArrowUp") {
        evt.preventDefault();

        if (activeIndex === null) {
          newActiveIndex = results.length - 1;
        } else {
          newActiveIndex = Math.max(0, activeIndex - 1);
        }
      } else if (evt.key == "Enter" && activeIndex !== null) {
        evt.preventDefault();

        if (onSelect) {
          onSelect(results[activeIndex].searchterm);
        }
      }
    }

    setActiveIndex(newActiveIndex);
  }

  return (
    <form
      onSubmit={(evt) => onSubmitForm(evt)}
      onKeyDown={(evt) => handleKeyDown(evt)}
      aria-label="search-form"
    >
      <div className="relative h-8" role="seach">
        <input
          id="search"
          ref={inputRef}
          value={value}
          aria-label="search-input"
          onChange={onChange}
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
        <div className="h-8 right-0 top-0 absolute">
          <SearchIcon aria-label="Zoeken" className="fill-slate-400" />
        </div>
        {debouncedValue &&
          debouncedValue.length >= MIN_LENGTH &&
          results !== null && (
            <SearchResults
              activeIndex={activeIndex}
              onSelect={(result) => onSelect && onSelect(result.searchterm)}
              term={debouncedValue}
              results={results}
            />
          )}
      </div>
    </form>
  );
}
