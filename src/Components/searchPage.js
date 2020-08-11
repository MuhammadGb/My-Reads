import React, { Component } from 'react'; 
import {Link}  from 'react-router-dom';
import FixBooks from './Fixbooks';
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {
  state = {
    value: "",
    newBooks: [],
  }
  searchInput = (event) => {
    this.setState(() => ({
      value: event
    }), this.library(event))
    
  }
  library = event => {
    event !== ""? 
    BooksAPI.search(event.trim()).then(books => {
      books.error
      ?this.setState({newBooks: []})
      :this.setState({newBooks: books})
    }):
    this.setState({newBooks: []})
  }

    render() {
      const {books, shelf, selectShelf} = this.props;
      const {value, newBooks} = this.state;

     const showBooks = value === ""? 
      newBooks: newBooks.filter(b => (b.title.toLowerCase().includes(value.toLowerCase()
      ||b.authors.join(", ").toLowerCase().includes(value.toLowerCase()))
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
              <button className="close-search">
              Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={this.state.value} 
                onChange={event => this.searchInput(event.target.value)} 
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
}
export default SearchPage