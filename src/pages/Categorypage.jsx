// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from '../data/books';
import BookCard from '../components/BookCard';

const CategoryPage = () => {
  const { genre } = useParams();
  const filteredBooks = booksData.filter(book => book.genre === genre);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{genre} Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
