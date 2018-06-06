import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBook extends Component{

state= {
    query: ''
  }
updateQuery=(query)=>{
  this.setState({  query:query  })
}
clearQuery = () => {
  this.setState( {query:''})
}
render () {

  let showBooks

  if(this.state.query) {
  const match=new RegExp(escapeRegExp(this.state.query),'i')
  showBooks=this.props.books.filter((book)=>match.test(book.title)||match.test(book.authors))

  } else {
    showBooks=this.props.books
  }

  showBooks.sort(sortBy('title'))


return (
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      {
        showBooks.map((book)=> (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select  defaultValue={book.shelf} onChange={(event) => this.props.change(event.target.value,book)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" checked >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {  book.authors.map((author)=> (
                <div className="book-authors" key={author}>{author}</div>
              ))
              }
            </div>
            {book.ratingsCount && (
              <div className="book-ratings">Ratings: {book.ratingsCount}</div>
            )
            }
            {!book.ratingsCount && (
              <div className="book-ratings">Ratings: Nil </div>
            )
            }
          </li>
        ))
      }
      </ol>
    </div>
  </div>
)

}

}
export default SearchBook
