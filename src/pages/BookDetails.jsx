
import React from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from '../data/books';

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find(book => book.id === parseInt(id));

  if (!book) return <div className="p-8">Book not found</div>;

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={book.cover} alt={book.title} className="w-64 h-96 object-cover" />
        <div>
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-xl text-gray-600">by {book.author}</p>
          <p className="mt-4">{book.description}</p>
          <p className="mt-2 font-semibold">${book.price}</p>
        </div>
      </div>
    </main>
  );
};

export default BookDetails;
