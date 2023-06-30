
import { ReactNode } from "react";

type Props = {
    children: ReactNode
  }
  
export function SearchResult({ children }: Props) {
    return <div className="p-2 border top[-2px] border-slate-200">{children}</div>
}