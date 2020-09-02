import React, { useState } from 'react'; 
import {Link}  from 'react-router-dom';
import FixBooks from './Fixbooks';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

const SearchPage = ({books, shelf, selectShelf}) => {
  const [inputValue, setInputValue] = useState("");
  const [newBooks, setNewBooks] = useState([]);

  const searchInput = event => {
    setInputValue(event, library(event))
  }

  const library = event => {
    event !== ""? 
    BooksAPI.search(event.trim()).then(books => {
      books.error
      ?setNewBooks([])
      :setNewBooks(books)
    }):
    setNewBooks([])
  }

 const showBooks = inputValue === ""? 
  newBooks: newBooks.filter(b => (b.title.toLowerCase().includes(inputValue.toLowerCase()
  ||b.authors.join(", ").toLowerCase().includes(inputValue.toLowerCase()))
  ));
  
  const shelfedBooks = showBooks.map(bk => {
    books.map(bks => (  
      bks.id === bk.id
      ?bk.shelf = bks.shelf: shelf 
    ));
    return bk;
  });

  
  return (
    <div className="search-books">
    <div className="search-books-bar">
    <Link to ="/">
      <button className="close-search">Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input type="text" value={inputValue} 
        onChange={event => searchInput(event.target.value)} 
        placeholder="Search by title or author"/>
      </div>
    </div>
    <div className="search-books-results">
  {showBooks !== newBooks && (
    <div>
      <h3>Showing {showBooks.length} results </h3>
<ol className="books-grid">
  {shelfedBooks.map(book => (<FixBooks shelf={book.shelf ? book.shelf : 'none'} 
  selectShelf={selectShelf} key={book.id} books={book}/>))}</ol>
    </div>
    )}
    </div>
  </div>
  )
}
SearchPage.propTypes = {
  books: PropTypes.array,
  shelf: PropTypes.string,
  selectShelf: PropTypes.func,
}

export default SearchPage;