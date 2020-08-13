import React, { Component } from 'react'; 

function ChangeShelf (props) {
    const changeButton = event => {
        props.selectShelf(props.books, event.target.value)
    }

    //render() {
        //const {shelf, books} = this.props;
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
    //}
}

export default ChangeShelf