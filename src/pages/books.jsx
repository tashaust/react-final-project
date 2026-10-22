import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: "OL16239762W",
    title: "Gone Girl",
    genre: "Thriller",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeverBrTxcVMIhp9gVszN10fs7Gih1RWqCUN2nTb9IwFtz82C3MxBiLE&s=10"
  },
  {
    id: "OL37505495W",
    title: "First Lie Wins",
    genre: "Thriller",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704216161i/164444179.jpg"
  },
  {
    id: "OL34224558W",
    title: "Never Lie",
    genre: "Thriller",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661428846i/62080187.jpg"
  },
  {
    id: "OL19096402W",
    title: "The Silent Patient",
    genre: "Thriller",
    cover: "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL27729743W",
    title: "The Housemaid",
    genre: "Thriller",
    cover: "https://m.media-amazon.com/images/I/81ZO5VhpHtL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL20068530W",
    title: "Verity",
    genre: "Thriller",
    cover: "https://m.media-amazon.com/images/I/81HVQp-OMfL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL24178205W",
    title: "The Love Hypothesis",
    genre: "Romance",
    cover: "https://m.media-amazon.com/images/I/71yIEgCpnoL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL37575309W",
    title: "Just For the Summer",
    genre: "Romance",
    cover: "https://www.hachettebookgroup.com/wp-content/uploads/2024/04/9781538704448_d509b0.jpg"
  },
  {
    id: "OL22563730W",
    title: "People We Meet on Vacation",
    genre: "Romance",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748450140i/54985743.jpg"
  },
  {
    id: "OL18020194W",
    title: "It Ends With Us",
    genre: "Romance",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg"
  },
  {
    id: "OL16444438W",
    title: "The Fault In Our Stars",
    genre: "Romance",
    cover: "https://images.penguinrandomhouse.com/cover/9780142424179"
  },
  {
    id: "OL20734329W",
    title: "Beach Read",
    genre: "Romance",
    cover: "https://m.media-amazon.com/images/I/71kdiN5Y1YL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL17352669W",
    title: "A Court of Thorns and Roses",
    genre: "Fantasy",
    cover: "https://m.media-amazon.com/images/I/81OBhRM2tjL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL29226517W",
    title: "Fourth Wing",
    genre: "Fantasy",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg"
  },
  {
    id: "OL27838518W",
    title: "From Blood and Ash",
    genre: "Fantasy",
    cover: "https://m.media-amazon.com/images/I/81A-LrD-RSL._UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL8455255W",
    title: "City Of Bones",
    genre: "Fantasy",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpK0MS0eVdRrgtHEmzwqVIwGTTXAlapGE30RybMPcLw&s=10"
  },
  {
    id: "OL5720023W",
    title: "Twilight",
    genre: "Fantasy",
    cover: "https://i5.walmartimages.com/seo/Twilight-Saga-Twilight-Book-1-Hardcover-9780316160179_4a3210d0-b277-4431-837f-84de1d18d70f.02e3e81c9bcf12aeba4927cfdf23fa77.jpeg"
  },
  {
    id: "OL34774028W",
    title: "Powerless",
    genre: "Fantasy",
    cover: "https://m.media-amazon.com/images/I/81k5yQ9qkcL._AC_UF350,350_QL50_.jpg"
  },
  {
    id: "OL42424992W",
    title: "Wild Dark Shore",
    genre: "Fiction",
    cover: "https://m.media-amazon.com/images/I/81lXSf+fNXL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL42394587W",
    title: "Great Big Beautiful Life",
    genre: "Fiction",
    cover: "https://bookshelfthomasville.com/cdn/shop/files/GREATBIGBEAUTIFULLIFE_9bc81a2f-a769-44db-adf7-398d2ff5b045.jpg?v=1729272916"
  },
  {
    id: "OL1846076W",
    title: "The Giver",
    genre: "Fiction",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1342493368i/3636.jpg"
  },
  {
    id: "OL45341675W",
    title: "The Midnight Train",
    genre: "Fiction",
    cover: "https://m.media-amazon.com/images/I/71hcMw4Z-bL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL35722643W",
    title: "The Lost Bookshop",
    genre: "Fiction",
    cover: "https://m.media-amazon.com/images/I/91Sy3S-198L._UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL17116910W",
    title: "The Nightingale",
    genre: "Fiction",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681839850i/21853621.jpg"
  }
];

const Books = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);

function filterGenres(e) {
  const { value, checked } = e.target;

  setSelectedGenres(prev =>
    checked
      ? [...prev, value]
      : prev.filter(genre => genre !== value)
  );
}
  return (
    <div className= "container">
    <form className="search__bar" id="search__bar">
    <input type="text" className="search__bar--input" placeholder="Search by genre, author, title, etc..." required />
    <button type="submit" className="search__bar--btn">Search</button>
</form>
        <h4 class="section__results">Search results:</h4>
        <div className="results__content">
          <form id="genreFilter" className="genre__filter">
    <h2>Filter by Genre</h2>
    <label>
        <input className="genre__checkbox" type="checkbox" value="Fiction" onChange={filterGenres} /> Fiction
    </label>
    <label>
        <input className="genre__checkbox" type="checkbox" value="Thriller" onChange={filterGenres} /> Thriller
    </label>
    <label>
        <input className="genre__checkbox" type="checkbox" value="Fantasy" onChange={filterGenres} /> Fantasy
    </label>
    <label>
        <input className="genre__checkbox" type="checkbox" value="Romance" onChange={filterGenres} /> Romance
    </label>
</form>
<div className="results__wrapper">
            <ul className="results__list">
            {books
            .filter(
                (book) =>
                    selectedGenres.length === 0 ||
                    selectedGenres.includes(book.genre)
            )
            .map((book) => (
            <li className="results__item" key={book.id}> 
            <img 
            className="results__img"
            src={book.cover}
            alt={book.title}
            />
            <Link 
            to={`/books/${book.id}`} 
                target="_blank" 
                rel="noopener noreferrer" className="results__btn">
                View Details
                </Link>
                </li>
            ))}
            </ul>
        </div>
    </div>
    </div>
  );
};

export default Books;