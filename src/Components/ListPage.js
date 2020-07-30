import React, { Component } from 'react'; 
import {Link}  from 'react-router-dom';
import Shelf from './shelf';

class ListPage extends Component {
    render() {
        return (
        <div>
        <div className="list-books-content">
          <Shelf/>
        </div>
        <div className="open-search">
        <Link to = "/search">
          <button /*onClick={() => this.setState({ showSearchPage: true })}*/>Add a book</button>
        </Link>
        </div>
        </div>
        )
    }
}

export default ListPage