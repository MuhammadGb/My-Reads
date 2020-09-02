import React, { Component } from 'react'; 
import ChangeShelf from './Changeshelf';
import PropTypes from 'prop-types';
  
class FixBooks extends Component {

static propTypes = {
  books: PropTypes.object,
  shelf: PropTypes.string,
  selectShelf: PropTypes.func
}

render() {
    const {books, shelf, selectShelf} = this.props;
    const Authors = books.authors && books.authors.join(", ")
    const Image = books.imageLinks && books.imageLinks.thumbnail
      return (
        <li key = {books.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${Image})` }}></div>
                <div className="book-shelf-changer">
                <ChangeShelf books = {books} shelf = {shelf} selectShelf={selectShelf}/>
                </div>
              </div>
              <div className="book-title">{books.title}</div>
              <div className="book-authors">
              {Authors}
              </div>
            </div>
        </li>
      )
    }
}
export default FixBooks