import React from 'react'; 
import PropTypes from 'prop-types';

function ChangeShelf (props) {
    const changeButton = event => {
        props.selectShelf(props.books, event.target.value)
    }
    props.books.shelf = props.shelf;
        
    return (
    <select onChange={changeButton} defaultValue={props.books.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
    )
}

ChangeShelf.propTypes = {
    books: PropTypes.object,
    shelf: PropTypes.string
}

export default ChangeShelf;