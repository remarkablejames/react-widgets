import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
function BookList() {
  const value = useContext(BooksContext);
  return <h1>here's what we have:::: {value.text}</h1>;
}

export default BookList;
