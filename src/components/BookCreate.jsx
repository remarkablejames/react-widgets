import { useState } from "react";

function BookCreate({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(0);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addBook({
          title,
          author,
          price,
          id,
        });
      }}
    >
      <h2>Create a Book</h2>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <label htmlFor="id">ID</label>
      <input
        type="text"
        id="id"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BookCreate;
