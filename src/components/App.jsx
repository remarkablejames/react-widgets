import { useState } from "react";
import BookList from "./BookList";
import BookCreate from "./BookCreate";
function App() {
  const bookList = [
    {
      id: 1,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      price: 8.99,
    },
    {
      id: 2,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: 6.99,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 7.99,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 9.99,
    },
    {
      id: 5,
      title: "Twilight",
      author: "Stephenie Meyer",
      price: 5.99,
    },
  ];
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    console.log(book);
    setBooks([...books, book]);
  };

  return (
    <div>
      <BookCreate addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
