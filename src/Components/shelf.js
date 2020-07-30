import React, { Component } from 'react'; 
//import BookMake from './bookCover';

const books = {   
    1: {
        imageURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: "currently Reading",
        id: 1,
    },
    2: {
        imageURL: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        title: "1776",
        author: "David McCullough",
        shelf: "Want To Read",
        id: 2,
    },
    3: {
        imageURL: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        shelf: "Read",
        id: 3,
    },
    4: {
      imageURL: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
      title: "Ender's Game",
      author: "Orson Scott Card",
      shelf: "currently Reading",
      id: 4,
  },
  5: {
      imageURL: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      shelf: "Want To Read",
      id: 5,
  },
  6: {
      imageURL: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
      title: "Oh, the Places You'll Go!",
      author: "Seuss",
      shelf: "Read",
      id: 6,
  },
}
  const profiles = [
    {
      id: 1,
      bookID: "1",
      favoriteShelfID: "Currently Reading",
    },
    {
      id: 2,
      bookID: "2",
      favoriteShelfID: "Want To Read",
    },
    {
      id: 3,
      bookID: "3",
      favoriteShelfID: "Read",
    },
    {
      id: 4,
      bookID: "4",
      favoriteShelfID: "Currently Reading",
    },
    {
      id: 5,
      bookID: "5",
      favoriteShelfID: "Want To Read",
    },
    {
      id: 6,
      bookID: "6",
      favoriteShelfID: "Read",
    }
  ];

  const shelfTypes = { 
      1: {
          id : "Currently Reading",
          name:"Currently Reading",
        },
        2: {
            id : "Want To Read",
            name:"Want To Read",
        },
        3: {
            id : "Read",
            name:"Read",
        },
        4: {
            id : "None",
            name:"None",
        }
    }

  
class Shelf extends Component {

  state = {
    value: ""
  }

  changeValue = event => {
    this.setState({value: event.target.value})
  }

  constructor(props) {
    super(props);

  this.booksByShelf = {};

  profiles.forEach(profile => {
    const shelfID = profile.favoriteShelfID;

    if (this.booksByShelf[shelfID]) {
      this.booksByShelf[shelfID].push(profile.bookID);
    } else {
      this.booksByShelf[shelfID] = [profile.bookID];
    }
    //console.log(this.booksByShelf)
  });
}

  render() {
    return (
    <div>
      <ul>
        {Object.keys(shelfTypes).map(key => {
          const bookIDs = this.booksByShelf[shelfTypes[key].id];
          return (
            <li key={shelfTypes[key].id} style={{listStyleType: "none"}}>
              <div className="bookshelf">
              <h2 className="bookshelf-title" >{shelfTypes[key].name}</h2>
              {!bookIDs ? (
                <h4>None of the current users liked this movie</h4>
              ) : (
                ""
              )}
              <ul>
                {bookIDs &&
                  bookIDs.map(bookID => {
                    return (
                      <div className="bookshelf-books"> 
                      <li key={bookID} style={{listStyleType: "none", display: "flex", flexFlow: "column",}}>
                        <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${books[bookID].imageURL})` }}></div>
                        <div className="book-shelf-changer">
                        <select value = {this.state.value} onChange = {this.changeValue}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                        </div>
                        <div className="book-title">{books[bookID].title}</div>
                        <div className="book-authors">{books[bookID].author}</div>
                        </div>
                      </li>
                      </div>
                    );
                  })}
              </ul>
              </div>
              </li> 
               );
              })}
              </ul>
              </div>
              )
            }
          }

    /*render() {
        return (
            <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BookMake books={books}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <BookMake books={books}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookMake books={books}/>
              </div>
            </div>
          </div>
        )
    }
}*/
export default Shelf