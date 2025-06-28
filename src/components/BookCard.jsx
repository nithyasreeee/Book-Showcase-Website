// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img src={book.cover} alt={book.title} className="h-48 object-cover w-full mb-3" />
    <h3 className="text-lg font-semibold">{book.title}</h3>
    <p className="text-sm text-gray-600">{book.author}</p>
    <p className="text-sm text-gray-500">${book.price}</p>
    <Link to={`/book/${book.id}`} className="text-blue-600 mt-2 inline-block">View Details</Link>
  </div>
);

export default BookCard;
