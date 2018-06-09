import React  from 'react'
import PropTypes from 'prop-types'
import Result from './result.js'
const Shelf=({showBooks,shelf,change})=> {

    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
      <Result showBooks={showBooks} change={change}/>
      </div>
      </div>
    );

  }

  Shelf.PropTypes= {
    showBooks: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired,
    shelf:PropTypes.string.isRequired
  }

export default Shelf
