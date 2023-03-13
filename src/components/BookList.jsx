import BookShow from "./BookShow";
function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
      {books.length}
    </div>
  );
}

export default BookList;
