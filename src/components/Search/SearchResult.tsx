import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function SearchResult({
  onClick,
  className,
  isActive,
  children,
}: Props) {
  return (
    <div
      data-testid={`search-result${isActive ? "-active" : ""}`}
      onClick={onClick}
      className={
        className +
        (isActive ? " bg-slate-400" : "") +
        " p-2 border top[-2px] border-slate-200"
      }
    >
      {children}
    </div>
  );
}
