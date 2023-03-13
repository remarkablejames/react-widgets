// import BookEdit from "./BookEdit";
function BookShow({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>${book.price}</p>
      {/* <BookEdit book={book} /> */}
    </div>
  );
}

export default BookShow;
