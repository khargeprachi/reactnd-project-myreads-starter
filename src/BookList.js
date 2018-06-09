import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './shelf.js'


const BookList = ({books,change,handleSearch}) => {

    return (
            <div className="list-books">
              <div className="list-books-title">
              <h1>MyReads</h1>
              </div>
              {/**** Currently Reading shelf****/}
                <Shelf showBooks={books.filter((book)=> book.shelf==='currentlyReading')} shelf='Currently Reading' change={change}/>


              {/**** Want to Read shelf****/}

              <Shelf showBooks={books.filter((book)=> book.shelf==='wantToRead')} shelf='Want To Read' change={change}/>


              {/**** Read shelf****/}
              <Shelf showBooks={books.filter((book)=> book.shelf==='read')} shelf='Read' change={change}/>

              <div className="open-search">
              <Link
              to= '/search'
              onClick={(event) => handleSearch(event)}
              value=""
              > search
              </Link>
              </div>
            </div>
            )
   }



 BookList.PropTypes = {
     books: PropTypes.array.isRequired,
     change: PropTypes.func.isRequired,
     handleSearch: PropTypes.func.isRequired
   }
export default BookList
