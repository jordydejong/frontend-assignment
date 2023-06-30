
import { ReactNode } from "react";

type Props = {
  children: ReactNode
  className?: string;
  onClick?: () => void;
}
  
export function SearchResult({ onClick, className, children }: Props) {
    return <div onClick={onClick} className={ className + ' p-2 border top[-2px] border-slate-200'}>{children}</div>
}