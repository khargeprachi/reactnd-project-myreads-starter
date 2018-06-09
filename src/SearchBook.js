import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Result from './result.js'
const SearchBook=({showBooks,change,handleSearch})=>{

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"
            onChange={(event) => handleSearch(event)}
          />
        </div>
      </div>


      {showBooks.length>=1 && (
        <div className="search-books-results">
        <Result showBooks={showBooks} change={change}/>
        </div>

      )}
    </div>
  )
 }

SearchBook.propTypes = {
    showBooks: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired

  }
export default SearchBook
