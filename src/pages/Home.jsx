import { books } from "../data/books";
import BookCard from "../components/BookCard";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

const Home = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Book Showcase</h1>
      <FilterBar books={books} setFilteredBooks={setFilteredBooks} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
