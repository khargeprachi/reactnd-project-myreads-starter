import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Result from './result.js'
class SearchBook extends Component{

static propTypes = {
    showBooks: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired

  }

render () {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"
            onChange={(event) => this.props.handleSearch(event)}
          />
        </div>
      </div>


      {this.props.showBooks.length>=1 && (
        <div className="search-books-results">
        <Result showBooks={this.props.showBooks} change={this.props.change}/>
        </div>

      )}
    </div>
  )
 }
}
export default SearchBook
