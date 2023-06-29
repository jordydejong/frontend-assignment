import { useEffect, useRef, useState } from "react";
import ClearIcon from "./ClearIcon";
import SearchIcon from "./SeachIcon";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

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
          onChange={onChange}
          autoFocus
          type="text"
          placeholder="Zoeken"
          className="transition ease-in-out duration-1000 text-sm top-0 appearance-none border border-slate-400 focus:border-black h-full w-full pt-2 pb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div className="absolute h-6 top-1 right-[30px]" onClick={onClear}>
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
      </div>
    </form>
  );
}
