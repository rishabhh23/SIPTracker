import React from "react";
import { mockSearchResults } from "../constants/mock";

const Search = () => {
  const [input, setInput] = useState();
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);
  return <div></div>;
};

export default Search;
