import { suggestions } from "../../data/searchSuggestions";

export default function handler(req: any, res: any) {
  const search = req.query.search || "";
  const response = suggestions.filter(
    (suggestion) => suggestion.searchterm.indexOf(search) > -1
  );

  res.status(200).json(response);
}
