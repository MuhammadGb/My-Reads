import React from 'react'; 
import {Link}  from 'react-router-dom';
import FixBooks from './Fixbooks';
import PropTypes from 'prop-types';

const ListShelf = ({books, selectShelf}) => {
    
   const shelves = [ 
    {
      id : "currentlyReading",
      name: "Currently Reading",
    }, 
    {
      id : "wantToRead",
      name: "Want To Read",
    }, 
    {
      id : "read",
      name: "Read",
    }
  ]
        return (
        <div>
        <div className="list-books-content">
        {shelves.map(shelf => {
            const book = books.filter(book => book.shelf === shelf.id)
            return (
            <div className="bookshelf" key={shelf.id}>
              <h2 className="bookshelf-title">{shelf.name}</h2>
              <div className="bookshelf-books">
              <ol className="books-grid">
                {book.map(buk => ( 
                <FixBooks key={buk.id} shelf={shelf.id} books={buk} selectShelf={selectShelf}/>
                ))}
                </ol>
              </div>
            </div>
            )
            })}
        </div>
        <div className="open-search">
        <Link to = "/search">
          <button>Add a book</button>
        </Link>
        </div>
        </div>
        )
}

ListShelf.propTypes = {
  books: PropTypes.array,
  selectShelf: PropTypes.func
}
export default ListShelf