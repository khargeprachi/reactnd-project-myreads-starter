# MyReads Project
This is a  bookshelf app project build  using React. It has a list of books categorized into 3 shelves:
1)Currently reading
2)Want To Read
3)Read
Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.
The main page also has a link to /search, a search page that allows you to find books to add to your library.
The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

#How to start
You will need to install and setup Create React App using 'npm install ' and 'npm start'.
This will install all project dependencies and start the development server.
All the functionality required at the backend server is provided in 'BooksAPI.js' file.
These functionalities are:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).




## Dependencies
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html  
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── BookList.js # A component to list all the books placed into 3 shelves.
    ├── SearchBook.js # A component to search all the books by book title or book author

    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── search.png
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
