import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BookInfo() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState("Unknown author");

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );

        if (!response.ok) {
          throw new Error("Book not found");
        }

        const data = await response.json();
        setBook(data);

        const authorKey = data.authors?.[0]?.author?.key;

        if (authorKey) {
          const authorResponse = await fetch(
            `https://openlibrary.org${authorKey}.json`
          );

          if (authorResponse.ok) {
            const authorData = await authorResponse.json();
            setAuthor(authorData.name);
          }
        }
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    }

    fetchBookDetails();
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  const description =
    typeof book.description === "string"
      ? book.description
      : book.description?.value || "No description available.";

  return (
    <div className="book__details">
      {book.covers?.[0] && (
        <img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`} alt={book.title} />
      )}
      <h1>{book.title}</h1>
      <h3>By {author}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BookInfo;
