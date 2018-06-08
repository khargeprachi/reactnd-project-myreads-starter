import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class SearchBook extends Component{

static propTypes = {
    books: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired
  }
state= {
    query: '',
    showBooks:[]


}

updateQuery=(query)=>{

this.setState({query:query})

}

handleSearch=(query)=> {
if(query) {
  BooksAPI.search(query).then((searchResult)=> {
    
    if(searchResult) {
      this.setState({showBooks:searchResult.sort(sortBy('title'))})
}

}).catch(()=> this.setState({showBooks:[]}))
}
}

shouldComponentUpdate(nextProps, nextState) {

   return this.state.query !== nextState.query || this.state.showBooks!==nextState.showBooks;
}

render () {

this.handleSearch(this.state.query)

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


      {this.state.showBooks.length>=1 && (
      <div className="search-books-results">
        <ol className="books-grid">
        {
          this.state.showBooks.map((b)=> (
            <li key={b.id}>

              <div className="book">
                <div className="book-top">
                {b.imageLinks && (
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
                  )}
                  <div className="book-shelf-changer">
                    <select  defaultValue={b.shelf} onChange={(event) => this.props.change(event.target.value,b)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading" checked >Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{b.title}</div>
                {b.authors && (  b.authors.map((author)=> (
                  <div className="book-authors" key={author}>{author}</div>
                ))
              )}
              </div>
              {b.ratingsCount && (
                <div className="book-ratings">Ratings: {b.ratingsCount}</div>
              )
              }
              {!b.ratingsCount && (
                <div className="book-ratings">Ratings: Nil </div>
              )
              }
            </li>
          ))
        }
        </ol>
      </div>
      )}
    </div>
  )
 }
}
export default SearchBook
