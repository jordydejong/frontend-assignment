import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
}

export default function Header({ className, children }: Props) {
  return (
    <div className={className}>
      <div className="grid s:grid-cols-1 md:grid-cols-2">
        <img className="" src="logo.svg" />
        <div>{children}</div>
      </div>
    </div>
  );
}
