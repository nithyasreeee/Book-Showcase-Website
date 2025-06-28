import { useParams } from "react-router-dom";
import { books } from "../data/books";

const BookDetails = () => {
  const { id } = useParams();
  if (!books || !Array.isArray(books)) return <p>Book data not available</p>;
  const book = books.find((b) => String(b.id) === String(id));

  if (!book) return <p>Book not found</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
      <img src={book.image} alt={book.title} className="w-64 mb-4" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p className="mt-4">{book.description}</p>
    </div>
  );
};

export default BookDetails;
