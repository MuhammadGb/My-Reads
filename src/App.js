import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Components/searchPage';
import {Route}  from 'react-router-dom';
import ListShelf from './Components/ListPage';


class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books: books}));
  }

  selectShelf = (book, shelf) => {
  	book.shelf =  shelf; 
  	this.setState( prev => ({
  		books:prev.books.filter(bk => bk.id !== book.id).concat(book)}
  		));
  	BooksAPI.update(book, shelf)
  }

  render() {
    const {books} = this.state
    return (
      <div className="app">
        <Route path = "/search" render = {() => (<SearchPage books={books} selectShelf={this.selectShelf}/>)}/>
      <Route exact path = "/" render = {() => (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyBookReads</h1>
        </div>
        <ListShelf books={books} selectShelf={this.selectShelf}/>
      </div>
      )}/>
      </div>
    )
  }
}

export default BooksApp
