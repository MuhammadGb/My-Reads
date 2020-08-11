# MyReads Project

This is a project designed to assist users in tracking the books they are currently reading or wish to read. As a result of this this webApp is employ the amazing powers of the React Library to create three shelves which inform you of which books: you have read in the past, you are currently reading, and the ones you so dearly wish to read! 

And the WebApp is all very easy to use. All you ever have to do to get started are:


* Clone the project from this link on Git hub - https://github.com/Hamg69/My-Reads
* Navigate to the project path on your workspace terminal
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Open your default browser with a connection to the internet
* Navigate to webApp path on your local server. 


## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains the main function and serves as the only true source to other components.
    ├── Components # This is the file that contains other necessary files in the making of the webApp
    │   ├── Changeshelf.js
    │   ├── Fixsook.js
    │   ├── ListPage.js
    │   └── SearchPage.js
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The webApp is fetches its data from a backend server. This means the user's search is dictated by the data the comes from the backend server. To put it in a more clear way the user may not be able the search for every existing books they want. Many of the book topics or words the user is able to search can be found in the [SEARCH_TERMS.md]. Those list of terms are the only terms that will work with the backend, so don't be surprised if your some of terms don't come back with any results.

## Important
* More importantly any search made will only return a maximum of 20 books. So you could just click on their controls to set any book you want to their desired shelf. For any search made and any results returned any book that has been selected before will inform you if it has and which shelf it was set to when selected. 

Enjoy your Book Tracking App!!!



