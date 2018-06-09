import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Result from './result.js'
class BookList extends Component {


  static propTypes = {
      books: PropTypes.array.isRequired,
      change: PropTypes.func.isRequired,
      handleSearch: PropTypes.func.isRequired
    }

  render () {
    return (
            <div className="list-books">
              <div className="list-books-title">
              <h1>MyReads</h1>
              </div>
              {/**** Currently Reading shelf****/}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <Result showBooks={this.props.books.filter((book)=> book.shelf==='currentlyReading')} change={this.props.change}/>
                </div>
              </div>
              {/**** Want to Read shelf****/}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                <Result showBooks={this.props.books.filter((book)=> book.shelf==='wantToRead')} change={this.props.change}/>
                </div>
              </div>
              {/**** Read shelf****/}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                <Result showBooks={this.props.books.filter((book)=> book.shelf==='read')} change={this.props.change}/>
                </div>
              </div>


              <div className="open-search">
              <Link
              to= '/search'
              onClick={(event) => this.props.handleSearch(event)}
              value=""
              > search
              </Link>
              </div>
            </div>
            )
   }


 }
export default BookList
