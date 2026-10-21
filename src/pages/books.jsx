import React from "react";

const Books = () => {
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
        <input className="genre__checkbox" type="checkbox" value="Fiction" onchange="filterGenres()" /> Fiction
    </label>
    <label>
        <input className="genre__checkbox" type="checkbox" value="Thriller" onchange="filterGenres()" /> Thriller
    </label>
    <label>
        <input className="genre__checkbox" type="checkbox" value="Fantasy" onchange="filterGenres()" /> Fantasy
    </label>
    <label>
        <input className="genre__checkbox" type="checkbox" value="Romance" onchange="filterGenres()" /> Romance
    </label>
</form>
<div className="results__wrapper">
     <ul className="results__list">
            <li className="results__item" data-genre="Thriller">
                <img className="results__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeverBrTxcVMIhp9gVszN10fs7Gih1RWqCUN2nTb9IwFtz82C3MxBiLE&s=10" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Thriller">
                <img className="results__img" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704216161i/164444179.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Thriller">
                <img className="results__img" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661428846i/62080187.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Thriller">
                <img className="results__img" src="https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Thriller">
                <img className="results__img" src="https://m.media-amazon.com/images/I/81ZO5VhpHtL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Thriller">
                <img className="results__img" src="https://m.media-amazon.com/images/I/81HVQp-OMfL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
     </ul> 
     <ul className="results__list">
            <li className="results__item" data-genre="Romance">
                <img className="results__img" src="https://m.media-amazon.com/images/I/71yIEgCpnoL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Romance">
                <img className="results__img" src="https://www.hachettebookgroup.com/wp-content/uploads/2024/04/9781538704448_d509b0.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Romance">
                <img className="results__img" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748450140i/54985743.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Romance">
                <img className="results__img" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Romance">
                <img className="results__img" src="https://m.media-amazon.com/images/I/71kdiN5Y1YL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Romance">
                <img className="results__img" src="https://images.penguinrandomhouse.com/cover/9780142424179" />
                <button className="results__btn">View Details</button>
            </li>
     </ul> 
     <ul className="results__list">
            <li className="results__item" data-genre="Fantasy">
                <img className="results__img" src="https://m.media-amazon.com/images/I/81OBhRM2tjL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fantasy">
                <img className="results__img" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fantasy">
                <img className="results__img" src="https://m.media-amazon.com/images/I/81A-LrD-RSL._UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fantasy">
                <img className="results__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpK0MS0eVdRrgtHEmzwqVIwGTTXAlapGE30RybMPcLw&s=10" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fantasy">
                <img className="results__img" src="https://i5.walmartimages.com/seo/Twilight-Saga-Twilight-Book-1-Hardcover-9780316160179_4a3210d0-b277-4431-837f-84de1d18d70f.02e3e81c9bcf12aeba4927cfdf23fa77.jpeg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fantasy">
                <img className="results__img" src="https://m.media-amazon.com/images/I/81k5yQ9qkcL._AC_UF350,350_QL50_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
     </ul> 
     <ul className="results__list">
            <li className="results__item" data-genre="Fiction">
                <img className="results__img" src="https://m.media-amazon.com/images/I/81lXSf+fNXL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fiction">
                <img className="results__img" src="https://bookshelfthomasville.com/cdn/shop/files/GREATBIGBEAUTIFULLIFE_9bc81a2f-a769-44db-adf7-398d2ff5b045.jpg?v=1729272916" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fiction">
                <img className="results__img" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1342493368i/3636.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fiction">
                <img className="results__img" src="https://m.media-amazon.com/images/I/71hcMw4Z-bL._AC_UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fiction">
                <img className="results__img" src="https://m.media-amazon.com/images/I/91Sy3S-198L._UF1000,1000_QL80_.jpg" />
                <button className="results__btn">View Details</button>
            </li>
            <li className="results__item" data-genre="Fiction">
                <img className="results__img" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681839850i/21853621.jpg" />
                <button className="results__btn">View Details</button>
            </li>
     </ul> 
    </div>
    </div>
    </div>
  );
};

export default Books;