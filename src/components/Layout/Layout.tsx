import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Search from "../Search/Search";

type Props = {
  children?: ReactNode;
  title?: string;
};

function searchTerm(term: string) {
  alert("TODO -- go search for " + term);
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="sticky bg-gray-200 top-0 p-4">
        <Search onSelect={(term) => searchTerm(term)} />
      </Header>
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <Footer className="sticky bg-slate-50 bottom-0 p-4" />
    </div>
  );
}
