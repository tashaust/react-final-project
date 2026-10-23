import React from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: "OL45177696W",
    title: "Yesteryear",
    cover: "https://cdn.shopify.com/s/files/1/0674/5433/7265/files/9798217287857_p0.jpg?v=1775530131"
  },
  {
    id: "OL45732307W",
    title: "The Calamity Club",
    cover: "https://neighborbookstx.com/cdn/shop/files/9781954118812-us.jpg?v=1778776276"
  },
  {
    id: "OL37618227W",
    title: "The Wedding People",
    cover: "https://m.media-amazon.com/images/I/91hU-bOyYJL._UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL44800712W",
    title: "Dear Debbie",
    cover: "https://www.sourcebooks.com/media/catalog/product/9/7/9781464249624_58.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
  },
  {
    id: "OL42414694W",
    title: "The Correspondent",
    cover: "https://m.media-amazon.com/images/I/81pbP7twi5L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: "OL45345748W",
    title: "Whistler",
    cover: "https://birchbarkbooks.com/cdn/shop/files/whistler.jpg?v=1771527418"
  },
  {
    id: "OL45097505W",
    title: "The Night We Met",
    cover: "https://www.hachettebookgroup.com/wp-content/uploads/2025/12/9781538780794.jpg?w=430"
  },
  {
    id: "OL44870937W",
    title: "My Husband's Wife",
    cover: "https://mpd-biblio-covers.imgix.net/9781250337818.jpg"
  }
  ];

  function Landing() {
  return (
    <div>
      <header className="header">
        <div className="header__content">
          <h1 className="title">
            Hi <b className="teal">readers</b>!
          </h1>
          <p className="header__para">
            This is <b className="teal"> your</b> go to site, where you can
            explore new books, find your next favorite read, and{" "}
            <b className="teal">connect</b> with other book lovers so far.
          </p>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Our <span className="teal">Favorite</span> Reads of{" "}
            <span className="teal">2026</span>
          </h1>
          <div>
          <ul className="search__list">
            {books
            .map((book) => (
            <li className="search" key={book.id}> 
            <img 
            className="search__img"
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
    </div>
  );
  }

export default Landing;
