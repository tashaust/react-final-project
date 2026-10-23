import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: "OL16239762W",
    title: "Gone Girl",
    genre: "Thriller",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeverBrTxcVMIhp9gVszN10fs7Gih1RWqCUN2nTb9IwFtz82C3MxBiLE&s=10",
  },
  {
    id: "OL37505495W",
    title: "First Lie Wins",
    genre: "Thriller",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704216161i/164444179.jpg",
  },
  {
    id: "OL34224558W",
    title: "Never Lie",
    genre: "Thriller",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661428846i/62080187.jpg",
  },
  {
    id: "OL19096402W",
    title: "The Silent Patient",
    genre: "Thriller",
    cover:
      "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL27729743W",
    title: "The Housemaid",
    genre: "Thriller",
    cover:
      "https://m.media-amazon.com/images/I/81ZO5VhpHtL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL20068530W",
    title: "Verity",
    genre: "Thriller",
    cover:
      "https://m.media-amazon.com/images/I/81HVQp-OMfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL24178205W",
    title: "The Love Hypothesis",
    genre: "Romance",
    cover:
      "https://m.media-amazon.com/images/I/71yIEgCpnoL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL37575309W",
    title: "Just For the Summer",
    genre: "Romance",
    cover:
      "https://www.hachettebookgroup.com/wp-content/uploads/2024/04/9781538704448_d509b0.jpg",
  },
  {
    id: "OL22563730W",
    title: "People We Meet on Vacation",
    genre: "Romance",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748450140i/54985743.jpg",
  },
  {
    id: "OL18020194W",
    title: "It Ends With Us",
    genre: "Romance",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg",
  },
  {
    id: "OL16444438W",
    title: "The Fault In Our Stars",
    genre: "Romance",
    cover:
      "https://images.penguinrandomhouse.com/cover/9780142424179",
  },
  {
    id: "OL20734329W",
    title: "Beach Read",
    genre: "Romance",
    cover:
      "https://m.media-amazon.com/images/I/71kdiN5Y1YL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL17352669W",
    title: "A Court of Thorns and Roses",
    genre: "Fantasy",
    cover:
      "https://m.media-amazon.com/images/I/81OBhRM2tjL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL29226517W",
    title: "Fourth Wing",
    genre: "Fantasy",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg",
  },
  {
    id: "OL27838518W",
    title: "From Blood and Ash",
    genre: "Fantasy",
    cover:
      "https://m.media-amazon.com/images/I/81A-LrD-RSL._UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL8455255W",
    title: "City Of Bones",
    genre: "Fantasy",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpK0MS0eVdRrgtHEmzwqVIwGTTXAlapGE30RybMPcLw&s=10",
  },
  {
    id: "OL5720023W",
    title: "Twilight",
    genre: "Fantasy",
    cover:
      "https://i5.walmartimages.com/seo/Twilight-Saga-Twilight-Book-1-Hardcover-9780316160179_4a3210d0-b277-4431-837f-84de1d18d70f.02e3e81c9bcf12aeba4927cfdf23fa77.jpeg",
  },
  {
    id: "OL34774028W",
    title: "Powerless",
    genre: "Fantasy",
    cover:
      "https://m.media-amazon.com/images/I/81k5yQ9qkcL._AC_UF350,350_QL50_.jpg",
  },
  {
    id: "OL42424992W",
    title: "Wild Dark Shore",
    genre: "Fiction",
    cover:
      "https://m.media-amazon.com/images/I/81lXSf+fNXL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL42394587W",
    title: "Great Big Beautiful Life",
    genre: "Fiction",
    cover:
      "https://bookshelfthomasville.com/cdn/shop/files/GREATBIGBEAUTIFULLIFE_9bc81a2f-a769-44db-adf7-398d2ff5b045.jpg?v=1729272916",
  },
  {
    id: "OL1846076W",
    title: "The Giver",
    genre: "Fiction",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1342493368i/3636.jpg",
  },
  {
    id: "OL45341675W",
    title: "The Midnight Train",
    genre: "Fiction",
    cover:
      "https://m.media-amazon.com/images/I/71hcMw4Z-bL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL35722643W",
    title: "The Lost Bookshop",
    genre: "Fiction",
    cover:
      "https://m.media-amazon.com/images/I/91Sy3S-198L._UF1000,1000_QL80_.jpg",
  },
  {
    id: "OL17116910W",
    title: "The Nightingale",
    genre: "Fiction",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681839850i/21853621.jpg",
  },
];

const Books = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const genres = ["Fiction", "Thriller", "Fantasy", "Romance"];

  // Filter the predefined book collection by genre.
  const filterGenres = (event) => {
    const { value, checked } = event.target;

    setSelectedGenres((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((genre) => genre !== value)
    );
  };

  // Search Open Library.
  const handleSearch = async (event) => {
    event.preventDefault();

    if (!query.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
        query.trim()
      )}&limit=20`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Unable to fetch books. Please try again.");
      }

      const data = await response.json();
      setSearchResults(data.docs || []);
    } catch (err) {
      setSearchResults([]);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Apply the selected genre filters.
  const filteredBooks = books.filter(
    (book) =>
      selectedGenres.length === 0 ||
      selectedGenres.includes(book.genre)
  );

  return (
    <div className="container">
      {/* Search bar */}
      <form className="search__bar" onSubmit={handleSearch}>
        <input
          type="text"
          className="search__bar--input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by genre, author, title, etc..."
        />

        <button className="search__bar--btn" type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Open Library search results */}
      {hasSearched && (
        <section className="api__results">
          <h2>Search Results</h2>

          {loading && <p>Loading books...</p>}

          {!loading && error && (
            <p role="alert">{error}</p>
          )}

          {!loading &&
            !error &&
            searchResults.length === 0 && (
              <p>No books found. Try another search.</p>
            )}

          <div className="apiResults">
            {searchResults.map((book) => (
              <div
                key={book.key}
                className="api__result--item"
              >
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={`Cover of ${book.title}`}
                    loading="lazy"
                  />
                )}

                <h3>{book.title}</h3>

                <p>
                  {book.author_name?.join(", ") ||
                    "Unknown author"}
                </p>

                {book.key && (
                  <Link
                    to={`/books/${book.key.split("/").pop()}`}
                    className="results__btn"
                  >
                    View Details
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Predefined book collection */}
      <section>
        <h2 className="section__results">Browse Books</h2>

        <div className="results__content">
          {/* Genre filter */}
          <div id="genreFilter" className="genre__filter">
            <h3>Filter by Genre</h3>

            {genres.map((genre) => (
              <label key={genre} htmlFor={`genre-${genre}`}>
                <input
                  id={`genre-${genre}`}
                  className="genre__checkbox"
                  type="checkbox"
                  value={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={filterGenres}
                />
                {" "}{genre}
              </label>
            ))}
          </div>

          {/* Filtered books */}
          <div className="results__wrapper">
            {filteredBooks.length === 0 ? (
              <p>No books found for the selected genres.</p>
            ) : (
              <ul className="results__list">
                {filteredBooks.map((book) => (
                  <li
                    className="results__item"
                    key={book.id}
                  >
                    <img
                      className="results__img"
                      src={book.cover}
                      alt={`Cover of ${book.title}`}
                      loading="lazy"
                    />

                    <Link
                      to={`/books/${book.id}`}
                      className="results__btn"
                    >
                      View Details
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;