function BookEdit({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>${book.price}</p>
    </div>
  );
}

export default BookEdit;
