import React, { Component } from 'react'; 

class ChangeShelf extends Component {
    changeButton = event => {
        this.props.selectShelf(this.props.books, event.target.value)
    }

    render() {
        const {shelf, books} = this.props;
        books.shelf = shelf;
        
        return (
        <select onChange={this.changeButton} defaultValue={books.shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
        )
    }
}

export default ChangeShelf