import { useEffect, useRef } from "react";
import SearchIcon from "./SeachIcon";

export default function Search() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [inputRef.current]);
    
    return (
        <form>
            <div className="relative h-8" role="seach">
                <input 
                    id="search"
                    ref={inputRef}
                    autoFocus
                    type="text"
                    placeholder="Zoeken"
                    className="text-sm top-0 appearance-none border border-slate-400 focus:border-black h-full w-full pt-2 pb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label className="h-8 right-0 top-0 absolute" htmlFor="search" aria-labelledby="searchTitle">
                    <title id="searchTitle">Zoeken</title>
                    <SearchIcon className="fill-slate-400" />
                </label>
            </div>
        </form>
    );
}
  